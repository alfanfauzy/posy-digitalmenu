import Get from 'api/get';
import {AxiosError} from 'axios';

import {Response} from '../../../domain/vo/BaseResponse';
import {GetCategoryListResponse} from '../types';

export const GetCategory = async (
	id: string,
): Promise<Response<Array<GetCategoryListResponse>>> => {
	try {
		const response = await Get({
			endpoint: `/api/fnb-product-service/menu/get-category-list`,
			headers: {'X-Transaction-Uuid': id},
		});

		return response;
	} catch (error) {
		const err = error as AxiosError;
		throw err.response?.data;
	}
};
