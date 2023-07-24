import {GetProductMenuResponse} from '@/data/product/types/GetProductsMenuType';
import {ProductMenuDetail} from '@/domain/product/models/ProductMenuDetail';
import {ProductsMenu} from '@/domain/product/models/ProductsMenu';

import {GetProductDetailResponse} from '../types/GetProductMenuDetailType';

export const mapToMenuProductsModel = (datas: Array<GetProductMenuResponse>): ProductsMenu => {
	const newData = {
		category_name: 'All',
		category_uuid: 'all',
		products: datas.flatMap(el => el.products),
	};
	return [newData, ...datas].map(el => ({
		category_name: el.category_name,
		category_uuid: el.category_uuid,
		products: el.products,
	}));
};

export const mapToMenuProductDetailModel = (
	datas: GetProductDetailResponse,
): ProductMenuDetail => ({
	detail: {
		product: {
			avg_rating: datas.detail.product.avg_rating,
			total_review: datas.detail.product.total_review,
			uuid: datas.detail.product.uuid,
			restaurant_uuid: datas.detail.product.restaurant_uuid,
			product_name: datas.detail.product.product_name,
			product_description: datas.detail.product.product_description,
			product_image_url: datas.detail.product.uuid,
			categories: datas.detail.product.categories.map(cat => ({
				category_name: cat.category_name,
				is_active: cat.is_active,
				uuid: cat.uuid,
			})),
		},
		is_show: datas.detail.is_show,
		is_available: datas.detail.is_available,
		is_discount: datas.detail.is_discount,
		is_favourite: datas.detail.is_favourite,
		price: datas.detail.price,
		price_discount: datas.detail.price_discount,
		price_after_discount: datas.detail.price_after_discount,
		price_discount_percentage: datas.detail.price_discount_percentage,
		price_final: datas.detail.price_final,
		cooking_duration: datas.detail.cooking_duration,
		avg_rating: 0,
		total_review: 0,
	},
	addons: datas.addons,
});
