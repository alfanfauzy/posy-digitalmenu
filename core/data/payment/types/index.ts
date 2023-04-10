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
