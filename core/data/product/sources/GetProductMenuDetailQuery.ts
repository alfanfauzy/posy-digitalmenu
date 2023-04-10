import Get from 'api/get';
import {AxiosError} from 'axios';
import {GetProductDetailParams} from 'core/domain/product/repositories/ProductRepository';
import {Response} from 'core/domain/vo/BaseResponse';

import {GetProductDetailResponse} from '../types';

export const GetProductDetail = async ({
	transaction_uuid,
	product_uuid,
}: GetProductDetailParams): Promise<Response<GetProductDetailResponse>> => {
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
