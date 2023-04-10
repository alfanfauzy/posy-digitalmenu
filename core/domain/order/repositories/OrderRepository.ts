/**
 * CREATE
 */

import {ResultMutation} from 'core/domain/vo/BaseResponse';

import {OrderParam} from '../models';

export type CreateOrderResult = ResultMutation<undefined>;

export type CreateOrderRepository = {
	createOrder(params: OrderParam): void;
} & CreateOrderResult;
