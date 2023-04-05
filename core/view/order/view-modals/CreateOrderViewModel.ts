import { CreateOrderResponse } from 'core/data/order/types'
import { useCreateOrderUsecase } from 'core/data/order/usecases/CreateOrderUsecase'
import { CreateOrderRepository } from 'core/domain/order/repositories/OrderRepository'
import { MutationOptions } from 'core/domain/vo/BaseMutation'

export const useCreateOrderViewModal = (
  options: MutationOptions<CreateOrderResponse>,
): CreateOrderRepository => {
  const result = useCreateOrderUsecase(options)

  return result
}
