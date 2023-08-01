export type CreateOrderResponse = {
	uuid: string;
	metadata: object;
};

export enum OrderDetailStatus {
	NOT_SELECTED = '0',
	NEED_TO_PRINT = '1',
	ON_KITCHEN = '2',
	SERVED = '3',
	CANCEL = '4',
}

export enum OrderStatus {
	ORDER_NOT_SELECTED = '0',
	ORDER_NEED_TO_PRINT = '1',
	ORDER_ON_KITCHEN = '2',
	ORDER_SERVED = '3',
	ORDER_CANCELLED = '4',
}

export type GetOrderResponse = {
	uuid: string;
	order_qty: number;
	order_number: string;
	price_base: number;
	price_discount: number;
	price_after_discount: number;
	price_subtotal_gross: number;
	price_final: number;
	status: OrderStatus;
	total_product: number;
	is_printed: boolean;
	total_print_kitchen: number;
	total_served: number;
	total_cancel: number;
	total_done: number;
	first_print_at: {
		seconds: number;
	};
	metadata: {
		created_at: {
			seconds: number;
			nanos: number;
		};
	};
	order_detail: Array<{
		uuid: string;
		product_image: string;
		cancel_reason_other: string;
		product_uuid: string;
		product_name: string;
		product_image_url: string;
		price_base: number;
		price_discount: number;
		price_after_discount: number;
		price_base_final: number;
		price_addon: number;
		price_final: number;
		qty: number;
		price_subtotal: number;
		addon_information: Array<{
			addon_name: string;
			addon_price: number;
			addon_variants: Array<{
				variant_name: string;
				variant_price: number;
			}>;
		}>;
		order_note: string;
		status: OrderDetailStatus;
		cancel_reason: string;
	}>;
};
