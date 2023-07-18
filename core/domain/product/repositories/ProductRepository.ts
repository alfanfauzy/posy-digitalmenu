import {ProductsMenu} from '@/domain/product/models';
import {ResultQuery} from '@/domain/vo/BaseResponse';

export type GetProductsMenuResult = ResultQuery<ProductsMenu | undefined>;

export type GetProductDetailParams = {transaction_uuid: string; product_uuid: string};
