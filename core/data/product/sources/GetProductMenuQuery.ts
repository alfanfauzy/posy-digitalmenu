import Get from 'api/get';
import {AxiosError} from 'axios';

import {DataObj, Response} from '../../../domain/vo/BaseResponse';
import {GetProductMenuResponse} from '../types';

export const GetProductMenu = async (
	id: string,
): Promise<Response<DataObj<GetProductMenuResponse>>> => {
	try {
		const response = await Get({
			endpoint: `/api/fnb-product-service/menu/get-product-list`,
			headers: {
				'X-Transaction-Uuid': id,
			},
		});

		return response;
	} catch (error) {
		const err = error as AxiosError;
		throw err.response?.data;
	}
};
