import Get from 'api/get';
import {AxiosError} from 'axios';
import {Response} from 'core/domain/vo/BaseResponse';

import {GetTransactionStatusResponse} from '../types';

export const GetTransactionStatus = async (
	transaction_uuid: string,
): Promise<Response<GetTransactionStatusResponse>> => {
	try {
		const response = await Get({
			endpoint: `/api/fnb-order-service/menu/transaction/check-status`,
			headers: {
				'X-Transaction-Uuid': transaction_uuid,
			},
		});

		return response;
	} catch (error) {
		const err = error as AxiosError;
		throw err.response;
	}
};
