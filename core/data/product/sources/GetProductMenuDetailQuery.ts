import {GetProductMenuDetailParams} from '@/domain/product/repositories/GetProductMenuRepository';
import {UseQueryOptions, useQuery} from '@tanstack/react-query';
import Get from 'api/get';
import {AxiosError} from 'axios';
import {Response} from 'core/domain/vo/BaseResponse';

import {GetProductDetailResponse} from '../types/GetProductMenuDetailType';

export const GetProductDetailKey = 'product-menu/detail';

export const GetProductDetail = async (
	param: GetProductMenuDetailParams,
): Promise<Response<GetProductDetailResponse>> => {
	const {transaction_uuid, product_uuid} = param;
	try {
		const response = await Get({
			endpoint: `/api/fnb-product-service/menu/get-product-detail/${product_uuid}`,
			headers: {
				'X-Transaction-Uuid': transaction_uuid,
			},
		});

		return response;
	} catch (error) {
		const err = error as AxiosError;
		throw err.response?.data;
	}
};

export const useGetMenuProductDetailQuery = (
	param: GetProductMenuDetailParams,
	options?: UseQueryOptions<Response<GetProductDetailResponse>>,
) =>
	useQuery<Response<GetProductDetailResponse>>(
		[GetProductDetailKey, JSON.stringify(param)],
		() => GetProductDetail(param),
		{
			refetchOnWindowFocus: false,
			...options,
		},
	);
