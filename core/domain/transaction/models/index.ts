export type FinishTransactionForm = {
	customer_name: string;
	customer_email: string;
	customer_phone: string;
	payment_type: string;
};

export type FinishTransactionParam = {
	id: string;
	payload: FinishTransactionForm;
};

export type CreateTransactionFinish = {
	success: boolean;
	metadata: {
		updated_at: {
			seconds: number;
			nanos: number;
		};
	};
};
