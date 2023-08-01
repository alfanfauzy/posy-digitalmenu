import {UseQueryOptions, useQuery} from '@tanstack/react-query';
import Post from 'api/post';
import {AxiosError} from 'axios';
import {Response} from 'core/domain/vo/BaseResponse';

import {GetOrderListByRatingResponse} from '../types/GetOrderListByRatingType';

export const GetOrderListByRatingKey = 'order-by-rating/list';

export const GetOrderListByRating = async (
	transaction_uuid: string,
): Promise<Response<GetOrderListByRatingResponse>> => {
	try {
		const response = await Post({
			endpoint: `/api/fnb-order-service/menu/order/get-list-by-rating/${transaction_uuid}`,
			data: {},
		});

		return response;
	} catch (error) {
		const err = error as AxiosError;
		throw err.response?.data;
	}
};

export const useGetOrderListByRatingQuery = (
	transaction_uuid: string,
	options?: UseQueryOptions<Response<GetOrderListByRatingResponse>>,
) =>
	useQuery<Response<GetOrderListByRatingResponse>>(
		[GetOrderListByRatingKey, JSON.stringify(transaction_uuid)],
		() => GetOrderListByRating(transaction_uuid),
		{
			refetchOnWindowFocus: false,
			...options,
		},
	);
