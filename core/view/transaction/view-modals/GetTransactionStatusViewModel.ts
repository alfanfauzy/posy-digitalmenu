import {UseQueryOptions} from '@tanstack/react-query';
import {GetTransactionStatusResponse} from 'core/data/transaction/types/GetTransactionStatusType';
import {useGetTransactionStatusUsecase} from 'core/data/transaction/usecases/GetTransactionStatusUsecase';
import {GetTransactionStatusResult} from 'core/domain/transaction/repositories/GetTransactionStatusRepository';
import {Response} from 'core/domain/vo/BaseResponse';

export const useGetTransactionStatusViewModel = (
	transaction_uuid: string,
	options?: UseQueryOptions<Response<GetTransactionStatusResponse>>,
): GetTransactionStatusResult => {
	const result = useGetTransactionStatusUsecase(transaction_uuid, options);

	return result;
};
