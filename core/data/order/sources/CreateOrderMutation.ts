import {useMutation} from '@tanstack/react-query';
import Post from 'api/post';
import {OrderParam} from 'core/domain/order/models';
import {ErrorType} from 'core/domain/vo/BaseError';
import {MutationOptions} from 'core/domain/vo/BaseMutation';
import {Response} from 'core/domain/vo/BaseResponse';
import {toast} from 'react-toastify';

import {CreateOrderResponse} from '../types';

export const CreateOrderService = async (
	param: OrderParam,
): Promise<Response<CreateOrderResponse>> => {
	const {id, payload} = param;

	const response = await Post({
		endpoint: `/api/fnb-order-service/menu/order/create`,
		data: payload,
		headers: {'X-Transaction-Uuid': id},
	});

	if (response.code !== 0) {
		throw response;
	}

	return response;
};
export const useCreateOrderMutation = (options: MutationOptions<CreateOrderResponse>) =>
	useMutation({
		mutationFn: (payload: OrderParam) => CreateOrderService(payload),
		onError(error: ErrorType) {
			toast.error(error.more_info);
		},
		...options,
	});
