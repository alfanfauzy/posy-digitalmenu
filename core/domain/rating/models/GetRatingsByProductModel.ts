type RatingsByProductBased = {
	food_rating_uuid: string;
	product_name: string;
	rating: number;
	review: Array<string>;
	date: number;
	customer_name: string;
};

export type RatingsByProduct = Array<RatingsByProductBased>;
