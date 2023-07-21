import {UseQueryOptions} from '@tanstack/react-query';
import {GetTransactionStatusResult} from 'core/domain/transaction/repositories/GetTransactionStatusRepository';
import {Response} from 'core/domain/vo/BaseResponse';

import {mapToTransactionStatusModel} from '../mappers/TransactionMapper';
import {useGetTransactionStatusQuery} from '../sources/GetTransactionStatusQuery';
import {GetTransactionStatusResponse} from '../types/GetTransactionStatusType';

export const useGetTransactionStatusUsecase = (
	transaction_uuid: string,
	options?: UseQueryOptions<Response<GetTransactionStatusResponse>>,
): GetTransactionStatusResult => {
	const {data, ...rest} = useGetTransactionStatusQuery(transaction_uuid, options);

	if (data?.data) {
		const dataMapper = mapToTransactionStatusModel(data.data);

		return {
			data: dataMapper,
			...rest,
		};
	}

	return {
		data: undefined,
		...rest,
	};
};
