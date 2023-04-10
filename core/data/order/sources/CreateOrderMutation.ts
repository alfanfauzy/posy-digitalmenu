import {useMutation} from '@tanstack/react-query';
import Post from 'api/post';
import {AxiosError} from 'axios';
import {OrderParam} from 'core/domain/order/models';
import {ErrorType} from 'core/domain/vo/BaseError';
import {MutationOptions} from 'core/domain/vo/BaseMutation';
import {Response} from 'core/domain/vo/BaseResponse';

import {CreateOrderResponse} from '../types';

export const CreateOrderService = async (
	param: OrderParam,
): Promise<Response<CreateOrderResponse>> => {
	const {id, payload} = param;

	try {
		const response = await Post({
			endpoint: `/api/fnb-order-service/menu/order/create`,
			data: payload,
			headers: {'X-Transaction-Uuid': id},
		});

		return response;
	} catch (error) {
		const err = error as AxiosError;
		throw err.response?.data;
	}
};
export const useCreateOrderMutation = (options: MutationOptions<CreateOrderResponse>) =>
	useMutation({
		mutationFn: (payload: OrderParam) => CreateOrderService(payload),
		onError(error) {
			console.log(error);
		},
		...options,
	});
