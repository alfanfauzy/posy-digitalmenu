import {
	DataListRating,
	PayloadGetRatingByProduct,
} from '@/domain/rating/repositories/GetRatingsByProductRepository';
import {Response} from '@/domain/vo/BaseResponse';
import {UseQueryOptions, useQuery} from '@tanstack/react-query';
import Post from 'api/post';
import {AxiosError} from 'axios';

import {GetRatingByProductResponse} from '../types/GetRatingsByProductType';

const GetRatingByProductQueryKey = 'rating-by-product/list';

export const GetRatingByProduct = async (
	payload: PayloadGetRatingByProduct,
): Promise<Response<DataListRating<Array<GetRatingByProductResponse>>>> => {
	try {
		const {transaction_uuid, param} = payload;

		const response = await Post({
			endpoint: `/api/fnb-product-service/menu/rating/product-rating/get-by-product`,
			data: param,
			headers: {
				'X-Transaction-Uuid': transaction_uuid,
			},
		});

		return {
			code: response?.code,
			data: response?.data,
			message: response?.message,
			more_info: response?.more_info,
		};
	} catch (error) {
		const err = error as AxiosError;
		throw err.response?.data;
	}
};

export const useGetRatingsByProductQuery = (
	payload: PayloadGetRatingByProduct,
	options?: UseQueryOptions<Response<DataListRating<Array<GetRatingByProductResponse>>>>,
) =>
	useQuery<Response<DataListRating<Array<GetRatingByProductResponse>>>>(
		[GetRatingByProductQueryKey, JSON.stringify(payload)],
		() => GetRatingByProduct(payload),
		{
			refetchOnWindowFocus: false,
			...options,
		},
	);
