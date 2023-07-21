import {CheckTransactionStatus} from 'core/domain/transaction/models/GetTransactionStatusModels';

import {GetTransactionStatusResponse} from '../types/GetTransactionStatusType';

export const mapToTransactionStatusModel = (
	data: GetTransactionStatusResponse,
): CheckTransactionStatus => ({
	is_cancel: data.is_cancel,
	is_open: data.is_open,
	is_paid: data.is_paid,
	is_refunded: data.is_refunded,
	is_reviewed: data.is_reviewed,
	is_waiting_payment: data.is_waiting_payment,
});
