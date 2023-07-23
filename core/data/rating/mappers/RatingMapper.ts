import {capitalizeFirstLetter} from 'utils/UtilsCapitalizeLetter';

import {GetRatingByProductResponse} from '../types/GetRatingsByProductType';
import {RatingsByProduct} from './../../../domain/rating/models/GetRatingsByProductModel';

export const mapToRatingsByProductModel = (
	datas: Array<GetRatingByProductResponse>,
): RatingsByProduct =>
	datas.map(data => ({
		customer_name: data.customer?.name,
		date: data.metadata.created_at?.seconds as number,
		food_rating_uuid: data.food_rating_uuid,
		rating: data.rating,
		product_name: data.product_name,
		review: data.review
			.filter(val => val !== 'OTHERS')
			.map(text => capitalizeFirstLetter(text.split('_').join(' '))),
	}));
