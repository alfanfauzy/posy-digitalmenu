import {useMutation} from '@tanstack/react-query';
import Post from 'api/post';
import {CreateTransactionFinish, FinishTransactionParam} from 'core/domain/transaction/models';
import {ErrorType} from 'core/domain/vo/BaseError';
import {MutationOptions} from 'core/domain/vo/BaseMutation';
import {Response} from 'core/domain/vo/BaseResponse';
import {toast} from 'react-toastify';

export const CreateFinishTransactionService = async (
	param: FinishTransactionParam,
): Promise<Response<CreateTransactionFinish>> => {
	const {id, payload} = param;

	const response = await Post({
		endpoint: `/api/fnb-order-service/menu/transaction/finish`,
		data: payload,
		headers: {'X-Transaction-Uuid': id},
	});

	if (response.code !== 0) {
		throw response;
	}

	return response;
};
export const useCreateFinishTransactionMutation = (
	options: MutationOptions<CreateTransactionFinish>,
) =>
	useMutation({
		mutationFn: (payload: FinishTransactionParam) => CreateFinishTransactionService(payload),
		onError(error: ErrorType) {
			toast.error(error.more_info);
		},
		...options,
	});
