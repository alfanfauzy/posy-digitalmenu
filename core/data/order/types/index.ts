export type CreateOrderResponse = {
	uuid: string;
	metadata: object;
};

export enum OrderStatusEnum {
	ORDER_RECEIVED = 'ORDER_RECEIVED',
	ORDER_PROCESS = 'ORDER_PROCESS',
	ORDER_SERVED = 'ORDER_SERVED',
	ORDER_CANCELLED = 'ORDER_CANCELLED',
}

export enum OrderDetailStatusEnum {
	RECEIVED = 'RECEIVED',
	PROCESS = 'PROCESS',
	SERVED = 'SERVED',
	CANCEL = 'CANCEL',
}

export type GetOrderResponse = {
	uuid: string;
	order_qty: number;
	price_base: number;
	price_discount: number;
	price_after_discount: number;
	price_subtotal_gross: number;
	price_final: number;
	status: OrderStatusEnum;
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
		status: OrderDetailStatusEnum;
		cancel_reason: string;
	}>;
};
