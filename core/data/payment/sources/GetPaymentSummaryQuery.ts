import Get from 'api/get';
import {AxiosError} from 'axios';
import {Response} from 'core/domain/vo/BaseResponse';

import {GetPaymentSummaryResponse} from '../types';

export const GetPaymentSummary = async (
	transaction_uuid: string,
): Promise<Response<GetPaymentSummaryResponse>> => {
	try {
		const response = await Get({
			endpoint: `/api/fnb-order-service/menu/payment/summary`,
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
