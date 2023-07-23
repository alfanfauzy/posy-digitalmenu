import {GetRatingByProductResponse} from '@/data/rating/types/GetRatingsByProductType';
import {useGetRatingsByProductUsecase} from '@/data/rating/usecase/GetRatingsByProductUsecase';
import {
	DataListRating,
	GetRatingsByProductResult,
	PayloadGetRatingByProduct,
} from '@/domain/rating/repositories/GetRatingsByProductRepository';
import {Response} from '@/domain/vo/BaseResponse';
import {UseQueryOptions} from '@tanstack/react-query';

export const useGetRatingsByProductViewModel = (
	payload: PayloadGetRatingByProduct,
	options?: UseQueryOptions<Response<DataListRating<Array<GetRatingByProductResponse>>>>,
): GetRatingsByProductResult => {
	const result = useGetRatingsByProductUsecase(payload, options);

	return result;
};
