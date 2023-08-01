import {UseQueryOptions, useQuery} from '@tanstack/react-query';
import Get from 'api/get';
import {Response} from 'core/domain/vo/BaseResponse';

import {GetTransactionStatusResponse} from '../types/GetTransactionStatusType';

export const GetTransactionStatusKey = 'Transaction-status';

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

export const useGetTransactionStatusQuery = (
	transaction_uuid: string,
	options?: UseQueryOptions<Response<GetTransactionStatusResponse>>,
) =>
	useQuery<Response<GetTransactionStatusResponse>>(
		[GetTransactionStatusKey, JSON.stringify(transaction_uuid)],
		() => GetTransactionStatus(transaction_uuid),
		{
			enabled: !!JSON.stringify(transaction_uuid),
			...options,
		},
	);
