import {CreateRatingResponse} from 'core/data/rating/types/CreateRatingType';
import {ResultMutation} from 'core/domain/vo/BaseResponse';

export type CreateRatingForm = {
	rating: number;
	review: Array<string>;
	review_note: string;
	product_rating: Array<{
		order_detail_uuid: string;
		rating: number;
		review_note: string;
	}>;
};

export type CreateRatingPayload = {transaction_uuid: string; payload: CreateRatingForm};

export type CreateRatingResult = ResultMutation<CreateRatingResponse | undefined>;

export type CreateRatingRepository = {
	createRating(payload: CreateRatingPayload): void;
} & CreateRatingResult;
