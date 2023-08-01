import {capitalizeFirstLetter} from 'utils/UtilsCapitalizeLetter';

import {GetRatingByProductResponse} from '../types/GetRatingsByProductType';
import {RatingsByProduct} from './../../../domain/rating/models/GetRatingsByProductModel';

export const mapToRatingsByProductModel = (
	datas: Array<GetRatingByProductResponse>,
): RatingsByProduct =>
	datas.map(data => ({
		customer_name: data.customer_info.name,
		date: data.customer_info.first_order_at,
		food_rating_uuid: data.food_rating_product.uuid,
		rating: data.food_rating_product.rating,
		product_name: data.food_rating_product.product_name,
		review: data.food_rating_product.review
			.filter(val => val !== 'OTHERS')
			.map(text => capitalizeFirstLetter(text.split('_').join(' '))),
		review_note: data.food_rating_product.review_note,
	}));
