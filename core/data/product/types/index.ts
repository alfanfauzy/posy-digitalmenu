import {Product} from '@/domain/product/models/ProductsMenu';
import {GetCategoryListResponse} from 'core/data/category/types';
import {Addons} from 'core/domain/addon/model';

export type GetProductMenuResponse = {
	category_uuid: string;
	category_name: string;
	products: Array<Product>;
};

export type GetProductDetailResponse = {
	detail: {
		product: {
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
