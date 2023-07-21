import {useMutation} from '@tanstack/react-query';
import Post from 'api/post';
import {CreateRatingPayload} from 'core/domain/rating/repositories/CreateRatingRepository';
import {ErrorType} from 'core/domain/vo/BaseError';
import {MutationOptions} from 'core/domain/vo/BaseMutation';
import {Response} from 'core/domain/vo/BaseResponse';
import {toast} from 'react-toastify';

import {CreateRatingResponse} from '../types/CreateRatingType';

export const CreateRatingService = async (
	param: CreateRatingPayload,
): Promise<Response<CreateRatingResponse>> => {
	const {transaction_uuid, payload} = param;

	const response = await Post({
		endpoint: `/api/fnb-product-service/menu/rating/save-review`,
		data: payload,
		headers: {'X-Transaction-Uuid': transaction_uuid},
	});

	return response;
};
export const useCreateRatingtMutation = (options?: MutationOptions<CreateRatingResponse>) =>
	useMutation({
		mutationFn: (param: CreateRatingPayload) => CreateRatingService(param),
		onError(error: ErrorType) {
			toast.error(error.more_info);
		},
		...options,
	});
