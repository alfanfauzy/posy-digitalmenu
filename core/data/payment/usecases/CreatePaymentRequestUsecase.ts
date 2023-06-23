import {PaymentRequestPayload} from 'core/domain/payment/models';
import {MutationOptions} from 'core/domain/vo/BaseMutation';

import {useCreatePaymentRequestMutation} from '../sources/CreatePaymentRequestMutation';
import {CreatePaymentRequestResponse} from '../types';

export const useCreatePaymentRequestUsecase = (
	options: MutationOptions<CreatePaymentRequestResponse>,
): any => {
	const {mutate, data, ...rest} = useCreatePaymentRequestMutation(options);

	const createPaymentRequest = (payload: PaymentRequestPayload) => {
		mutate(payload);
	};

	return {
		createPaymentRequest,
		data: data?.data,
		...rest,
	};
};
