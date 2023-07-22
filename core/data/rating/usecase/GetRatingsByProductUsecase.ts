import {mapToMenuProductsModel} from '@/data/product/mappers/ProductMapper';
import {
	GetRatingsByProductResult,
	PayloadGetRatingByProduct,
} from '@/domain/rating/repositories/GetRatingsByProductRepository';
import {DataListRating, Response} from '@/domain/vo/BaseResponse';
import {UseQueryOptions} from '@tanstack/react-query';

import {mapToRatingsByProductModel} from '../mappers/RatingMapper';
import {useGetRatingsByProductQuery} from '../sources/GetRatingsByProductQuery';
import {GetRatingByProductResponse} from '../types/GetRatingsByProductType';

export const useGetRatingsByProductUsecase = (
	payload: PayloadGetRatingByProduct,
	options?: UseQueryOptions<Response<DataListRating<Array<GetRatingByProductResponse>>>>,
): GetRatingsByProductResult => {
	const {data, ...rest} = useGetRatingsByProductQuery(payload, options);

	if (data?.data.product_rating) {
		const dataMapper = mapToRatingsByProductModel(data.data.product_rating);

		return {
			data: dataMapper,
			...rest,
		};
	}

	return {
		data: undefined,
		...rest,
	};
};
