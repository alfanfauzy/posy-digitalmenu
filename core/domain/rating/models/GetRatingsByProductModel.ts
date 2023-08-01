type RatingsByProductBased = {
	food_rating_uuid: string;
	product_name: string;
	rating: number;
	review: Array<string>;
	date: string;
	customer_name: string;
	review_note: string;
};

export type RatingsByProduct = Array<RatingsByProductBased>;
