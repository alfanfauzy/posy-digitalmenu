import {useMutation} from '@tanstack/react-query';
import Post from 'api/post';
import {PaymentRequestPayload} from 'core/domain/payment/models';
import {ErrorType} from 'core/domain/vo/BaseError';
import {MutationOptions} from 'core/domain/vo/BaseMutation';
import {Response} from 'core/domain/vo/BaseResponse';
import {toast} from 'react-toastify';

import {CreatePaymentRequestResponse} from '../types';

export const CreatePaymentRequestService = async (
	param: PaymentRequestPayload,
): Promise<Response<CreatePaymentRequestResponse>> => {
	const {transaction_id, payload} = param;

	const response = await Post({
		endpoint: `/api/fnb-payment-service/menu/payment-request`,
		data: payload,
		headers: {'X-Transaction-Uuid': transaction_id},
	});

	if (response.code !== 0) {
		throw response;
	}

	return response;
};
export const useCreatePaymentRequestMutation = (
	options: MutationOptions<CreatePaymentRequestResponse>,
) =>
	useMutation({
		mutationFn: (payload: PaymentRequestPayload) => CreatePaymentRequestService(payload),
		onError(error: ErrorType) {
			toast.error(error.more_info);
		},
		...options,
	});
