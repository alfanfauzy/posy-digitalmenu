import {PaymentMethod} from 'core/domain/payment/models';

export type GetPaymentSummaryResponse = {
	subtotal_price_gross: number;
	subtotal_price: number;
	discount_product_price: number;
	discount_general_percentage: number;
	discount_general_price: number;
	tax_and_charge: {
		is_service_charge: boolean;
		service_charge_percentage: number;
		is_service_charge_taxable: boolean;
		service_charge_price: number;
		is_tax: boolean;
		tax_type: string;
		tax_percentage: number;
		tax_price: number;
		tax_and_charge_price: number;
	};
	payment_price: number;
};

export type GetPaymentCompoletedResponse = {
	transaction_uuid: string;
	transaction_code: string;
	transaction_status: string;
	total_amount: number;
	paid_amount: number;
	change_amount: number;
	payment_method: string;
	payment_method_category: string;
};

export type GetPaymentMethodCategoryListResponse = {
	uuid: string;
	name: string;
	description: string;
	logo_url: string;
	priority: number;
	is_show: boolean;
	is_integration: boolean;
	payment_method: Array<PaymentMethod>;
};

export type CreatePaymentRequestResponse = {
	payment_request_id: string;
	invoice_url: string;
	amount: number;
	status: string;
	expired_at: string;
	metadata: {
		created_at: string;
	};
};

export type GetPaymentRequestResponse = {
	payment_request_id: string;
	invoice_url: string;
	amount: number;
	status: string;
	expired_at: string;
	payment_method: {
		uuid: string;
		name: string;
		logo_url: string;
		category_name: string;
	};
	metadata: {
		created_at: string;
		updated_at: string;
	};
};
