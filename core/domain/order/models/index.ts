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
