type GetOrders = {
	uuid: string;
	product_name: string;
	qty: number;
};

export type GetOrderListByRatingResponse = {
	order_detail: Array<GetOrders>;
};
