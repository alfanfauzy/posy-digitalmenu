import Get from 'api/get';
import {AxiosError} from 'axios';
import {Response} from 'core/domain/vo/BaseResponse';

import {GetTransactionDetailResponse} from '../types';

export const GetTransactionDetail = async (
	transaction_uuid: string,
): Promise<Response<GetTransactionDetailResponse>> => {
	try {
		const response = await Get({
			endpoint: `/api/fnb-order-service/menu/transaction/get-detail`,
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
