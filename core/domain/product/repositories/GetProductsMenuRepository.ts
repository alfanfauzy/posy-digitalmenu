import {ResultQuery} from '@/domain/vo/BaseResponse';

import {ProductsMenu} from '../models/ProductsMenu';

export type GetProductsMenuResult = ResultQuery<ProductsMenu | undefined>;
