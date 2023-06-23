import Get from 'api/get';
import {AxiosError} from 'axios';
import {Response} from 'core/domain/vo/BaseResponse';

import {GetPaymentRequestResponse} from '../types';

export const GetPaymentRequestQuery = async (
	transaction_uuid: string,
): Promise<Response<GetPaymentRequestResponse>> => {
	try {
		const response = await Get({
			endpoint: `/api/fnb-payment-service/menu/payment-request`,
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
