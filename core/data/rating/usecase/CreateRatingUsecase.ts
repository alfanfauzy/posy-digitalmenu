import {
	CreateRatingPayload,
	CreateRatingRepository,
} from 'core/domain/rating/repositories/CreateRatingRepository';
import {MutationOptions} from 'core/domain/vo/BaseMutation';

import {useCreateRatingtMutation} from '../sources/CreateRatingMutation';
import {CreateRatingResponse} from '../types/CreateRatingType';

export const useCreateRatingUsecase = (
	options?: MutationOptions<CreateRatingResponse>,
): CreateRatingRepository => {
	const {mutate, data, ...rest} = useCreateRatingtMutation(options);

	const createRating = (payload: CreateRatingPayload) => {
		mutate(payload);
	};

	return {
		createRating,
		data: data?.data,
		...rest,
	};
};
