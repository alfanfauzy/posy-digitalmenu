import { GetPaymentSummaryResponse } from '../types'
import { AxiosError } from 'axios'
import { Response } from 'core/domain/vo/BaseResponse'
import Get from 'api/get'

export const GetPaymentSummary = async (
  transaction_uuid: string,
): Promise<Response<GetPaymentSummaryResponse>> => {
  try {
    const response = await Get({
      endpoint: `/api/fnb-order-service/menu/payment/summary`,
      headers: {
        'X-Transaction-Uuid': transaction_uuid,
      },
    })

    return response
  } catch (error) {
    const err = error as AxiosError
    throw err.response?.data
  }
}
