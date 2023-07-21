export type GetTransactionStatusResponse = {
	is_open: boolean;
	is_paid: boolean;
	is_cancel: boolean;
	is_refunded: boolean;
	is_waiting_payment: boolean;
	is_reviewed: boolean;
};
