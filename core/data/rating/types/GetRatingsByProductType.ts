export type GetRatingByProductResponse = {
	customer_info: {
		name: string;
		first_order_at: string;
	};
	food_rating_product: {
		uuid: string;
		product_name: string;
		addon_information: any;
		rating: number;
		review: Array<string>;
		review_note: string;
	};
};
