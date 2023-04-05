/**
 * CREATE
 */

import { OrderParam } from '../models'
import { ResultMutation } from 'core/domain/vo/BaseResponse'

export type CreateOrderResult = ResultMutation<undefined>

export type CreateOrderRepository = {
  createOrder(params: OrderParam): void
} & CreateOrderResult
