import {ResultQuery} from 'core/domain/vo/BaseResponse';

import {OrdersByRating} from '../models/GetOrderListByRating';

export type GetOrderListByRatingResult = ResultQuery<OrdersByRating | undefined>;
