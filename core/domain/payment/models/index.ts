export type PaymentMethodBased = {
	uuid: string;
	name: string;
	payment_method_category_uuid: string;
	logo_url: string;
	priority: number;
	is_show: boolean;
	is_integration: boolean;
	code: string;
};

export type PaymentMethodCategoryBased = {
	uuid: string;
	name: string;
	description: string;
	logo_url: string;
	priority: number;
	is_show: boolean;
	is_integration: boolean;
	payment_method: Array<PaymentMethodBased>;
};

export type PaymentMethodCategory = PaymentMethodCategoryBased;
export type PaymentMethodCategorys = Array<PaymentMethodCategoryBased>;

export type PaymentMethod = PaymentMethodBased;

/**
 * Payment Request
 */

export type PaymentRequestPayload = {
	transaction_id: string;
	payload: {
		payment_method_uuid: string;
	};
};
