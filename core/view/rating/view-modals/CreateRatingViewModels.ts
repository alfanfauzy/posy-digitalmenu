import {CreateRatingResponse} from 'core/data/rating/types/CreateRatingType';
import {useCreateRatingUsecase} from 'core/data/rating/usecase/CreateRatingUsecase';
import {CreateRatingRepository} from 'core/domain/rating/repositories/CreateRatingRepository';
import {MutationOptions} from 'core/domain/vo/BaseMutation';

export const useCreateRatingViewModel = (
	options: MutationOptions<CreateRatingResponse>,
): CreateRatingRepository => {
	const result = useCreateRatingUsecase(options);

	return result;
};
