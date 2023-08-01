import {Product} from '@/domain/product/models/ProductsMenu';

export type GetProductMenuResponse = {
	category_uuid: string;
	category_name: string;
	products: Array<Product>;
};
