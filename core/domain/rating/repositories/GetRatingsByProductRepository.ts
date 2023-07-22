import {FilterInputVariables} from '@/domain/vo/BaseInput';
import {ResultQuery} from '@/domain/vo/BaseResponse';

import {RatingsByProduct} from '../models/GetRatingsByProductModel';

export type GetFilterRatingByProduct = FilterInputVariables<'created_at', 'product_uuid'>;

export type PayloadGetRatingByProduct = {
	param: GetFilterRatingByProduct;
	transaction_uuid: string;
};

export type GetRatingsByProductResult = ResultQuery<RatingsByProduct | undefined>;
