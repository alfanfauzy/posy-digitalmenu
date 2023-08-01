import {ResultQuery} from '@/domain/vo/BaseResponse';

import {ProductMenuDetail} from '../models/ProductMenuDetail';

export type GetProductMenuDetailParams = {transaction_uuid: string; product_uuid: string};

export type GetProductMenuDetailResult = ResultQuery<ProductMenuDetail | undefined>;
