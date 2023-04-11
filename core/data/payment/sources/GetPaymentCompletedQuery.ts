import Get from 'api/get';
import {AxiosError} from 'axios';
import {Response} from 'core/domain/vo/BaseResponse';

import {GetPaymentCompoletedResponse} from '../types';

export const GetPaymentCompleted = async (
	transaction_uuid: string,
): Promise<Response<GetPaymentCompoletedResponse>> => {
	try {
		const response = await Get({
			endpoint: `/api/fnb-order-service/menu/payment/bill-summary`,
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
