import {GetCategoryListResponse} from 'core/data/category/types';
import {Addons} from 'core/domain/addon/model';

export type ProductDetailBased = {
	detail: {
		product: {
			avg_rating: number;
			total_review: number;
			uuid: string;
			restaurant_uuid: string;
			product_name: string;
			product_description: string;
			product_image_url: string;
			categories: Array<GetCategoryListResponse>;
		};
		is_show: boolean;
		is_available: boolean;
		is_discount: boolean;
		is_favourite: boolean;
		price: number;
		price_discount: number;
		price_after_discount: number;
		price_discount_percentage: number;
		price_final: number;
		cooking_duration: number;
		avg_rating: number;
		total_review: number;
	};
	addons: Addons;
};

export type ProductMenuDetail = ProductDetailBased;
