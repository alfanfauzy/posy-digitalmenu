import {useCreateTransactionFinishUsecase} from 'core/data/transaction/usecases/CreateTransactionFinishUsecase';
import {CreateTransactionFinish} from 'core/domain/transaction/models';
import {CreateFinishTransactionRepository} from 'core/domain/transaction/repositories/TransactionRepositories';
import {MutationOptions} from 'core/domain/vo/BaseMutation';

export const useCreateFinishTransactionViewModal = (
	options: MutationOptions<CreateTransactionFinish>,
): CreateFinishTransactionRepository => {
	const result = useCreateTransactionFinishUsecase(options);

	return result;
};
