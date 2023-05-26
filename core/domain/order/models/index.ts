export enum OrderStatus {
	ORDER_NOT_SELECTED = '0',
	ORDER_NEED_TO_PRINT = '1',
	ORDER_ON_KITCHEN = '2',
	ORDER_SERVED = '3',
	ORDER_CANCELLED = '4',
}

export enum OrderDetailStatus {
	NOT_SELECTED = '0',
	NEED_TO_PRINT = '1',
	ON_KITCHEN = '2',
	SERVED = '3',
	CANCEL = '4',
}

export type OrderAddonDetail = {
	uuid: string;
	variant_uuids: Array<string>;
};

export type OrderDetail = {
	product_uuid: string;
	qty: number;
	order_note: string | undefined;
	addon: Array<OrderAddonDetail>;
};

export type OrderPayload = {
	order: Array<OrderDetail>;
};

export type OrderParam = {
	id: string;
	payload: OrderPayload;
};
