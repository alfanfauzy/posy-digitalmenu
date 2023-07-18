import {GetCategoryListResponse} from 'core/data/category/types';
import {Addons} from 'core/domain/addon/model';
import {CategoryBased} from 'core/domain/category/models';

export type ProductBased = {
	uuid: string;
	restaurant_uuid: string;
	product_name: string;
	product_description: string;
	product_image_url: string;
	categories: Array<CategoryBased>;
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

export type Products = Array<ProductBased>;
export type Product = ProductBased;

export type ProductMenu = {
	category_uuid: string;
	category_name: string;
	products: Products;
};

export type ProductsMenu = Array<ProductMenu>;

export type ProductDetailBased = {
	detail: {
		product: {
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

export type ProductDetail = ProductDetailBased;
