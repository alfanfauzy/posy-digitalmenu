import { CreateOrderResponse } from '../types'
import { useCreateOrderMutation } from '../sources/CreateOrderMutation'
import { MutationOptions } from 'core/domain/vo/BaseMutation'
import { OrderParam } from 'core/domain/order/models'

export const useCreateOrderUsecase = (options: MutationOptions<CreateOrderResponse>): any => {
  const { mutate, data, ...rest } = useCreateOrderMutation(options)

  const createOrder = (payload: OrderParam) => {
    mutate(payload)
  }

  return {
    createOrder,
    data: data?.data,
    ...rest,
  }
}
