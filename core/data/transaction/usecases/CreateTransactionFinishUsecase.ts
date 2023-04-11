import {CreateTransactionFinish, FinishTransactionParam} from 'core/domain/transaction/models';
import {MutationOptions} from 'core/domain/vo/BaseMutation';

import {useCreateFinishTransactionMutation} from '../sources/CreateTransactionFinishMutation';

export const useCreateTransactionFinishUsecase = (
	options: MutationOptions<CreateTransactionFinish>,
): any => {
	const {mutate, data, ...rest} = useCreateFinishTransactionMutation(options);

	const createTransactionFinish = (payload: FinishTransactionParam) => {
		mutate(payload);
	};

	return {
		createTransactionFinish,
		response: data?.data,
		...rest,
	};
};
