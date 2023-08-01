import {GetCategoryListResponse} from '@/data/category/types';
import {Addons} from '@/domain/addon/model';

export type GetProductDetailResponse = {
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
		avg_rating: number;
		total_review: number;
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
	};
	addons: Addons;
};
