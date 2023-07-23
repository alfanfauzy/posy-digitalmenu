import {FilterInputVariables} from '@/domain/vo/BaseInput';
import {Datalist, ResultQuery} from '@/domain/vo/BaseResponse';

import {RatingsByProduct} from '../models/GetRatingsByProductModel';

export type DataListRating<TData> = Omit<Datalist<TData>, 'objs'> & {
	product_rating: TData;
};

export type GetFilterRatingByProduct = FilterInputVariables<'created_at', 'product_uuid'>;

export type PayloadGetRatingByProduct = {
	param: GetFilterRatingByProduct;
	transaction_uuid: string;
};

export type GetRatingsByProductResult = ResultQuery<RatingsByProduct | undefined>;
