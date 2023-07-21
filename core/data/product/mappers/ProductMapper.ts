import {GetProductMenuResponse} from '@/data/product/types';
import {ProductsMenu} from '@/domain/product/models/ProductsMenu';

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
