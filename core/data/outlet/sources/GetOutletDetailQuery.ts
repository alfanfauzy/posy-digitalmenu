/* eslint-disable @typescript-eslint/naming-convention */
import Get from 'api/get';
import {AxiosError} from 'axios';
import {Response} from 'core/domain/vo/BaseResponse';

import {GetOutletDetailResponse} from '../types';

export const GetOutletDetail = async (
	transaction_uuid: string,
): Promise<Response<GetOutletDetailResponse>> => {
	try {
		const response = await Get({
			endpoint: `/api/fnb-user-service/menu/get-detail-outlet`,
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
