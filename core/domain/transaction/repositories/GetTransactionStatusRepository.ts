import {GetTransactionStatusResponse} from 'core/data/transaction/types/GetTransactionStatusType';
import {ResultQuery} from 'core/domain/vo/BaseResponse';

export type GetTransactionStatusPayload = {transaction_uuid: string};

export type GetTransactionStatusResult = ResultQuery<GetTransactionStatusResponse | undefined>;
