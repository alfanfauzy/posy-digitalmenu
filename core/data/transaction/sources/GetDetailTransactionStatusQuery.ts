import Get from 'api/get';
import {Response} from 'core/domain/vo/BaseResponse';

import {GetTransactionStatusResponse} from '../types';

export const GetTransactionStatus = async (
	transaction_uuid: string,
): Promise<Response<GetTransactionStatusResponse>> => {
	const response = await Get({
		endpoint: `/api/fnb-order-service/menu/transaction/check-status`,
		headers: {
			'X-Transaction-Uuid': transaction_uuid,
		},
	});

	if (response.code !== 0) {
		throw response;
	}

	return response;
};
