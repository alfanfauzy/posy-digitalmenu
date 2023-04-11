import {useMutation} from '@tanstack/react-query';
import Post from 'api/post';
import {AxiosError} from 'axios';
import {CreateTransactionFinish, FinishTransactionParam} from 'core/domain/transaction/models';
import {ErrorType} from 'core/domain/vo/BaseError';
import {MutationOptions} from 'core/domain/vo/BaseMutation';
import {Response} from 'core/domain/vo/BaseResponse';

export const CreateFinishTransactionService = async (
	param: FinishTransactionParam,
): Promise<Response<CreateTransactionFinish>> => {
	const {id, payload} = param;

	try {
		const response = await Post({
			endpoint: `/api/fnb-order-service/menu/transaction/finish`,
			data: payload,
			headers: {'X-Transaction-Uuid': id},
		});

		return response;
	} catch (error) {
		const err = error as AxiosError;
		throw err.response?.data;
	}
};
export const useCreateFinishTransactionMutation = (
	options: MutationOptions<CreateTransactionFinish>,
) =>
	useMutation({
		mutationFn: (payload: FinishTransactionParam) => CreateFinishTransactionService(payload),
		onError(error: ErrorType) {
			console.log(error.more_info);
		},
		...options,
	});
