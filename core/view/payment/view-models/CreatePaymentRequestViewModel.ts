import {CreatePaymentRequestResponse} from 'core/data/payment/types';
import {useCreatePaymentRequestUsecase} from 'core/data/payment/usecases/CreatePaymentRequestUsecase';
import {CreatePaymentRequestRepository} from 'core/domain/payment/repositories/PaymentRepositories';
import {MutationOptions} from 'core/domain/vo/BaseMutation';

export const useCreatePaymentRequestViewModal = (
	options: MutationOptions<CreatePaymentRequestResponse>,
): CreatePaymentRequestRepository => {
	const result = useCreatePaymentRequestUsecase(options);

	return result;
};
