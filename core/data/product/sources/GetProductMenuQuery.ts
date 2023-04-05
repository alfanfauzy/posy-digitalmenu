import { DataObj, Response } from '../../../domain/vo/BaseResponse'
import { GetProductMenuResponse } from '../types'
import { AxiosError } from 'axios'
import Get from 'api/get'

export const GetProductMenu = async (
  id: string,
): Promise<Response<DataObj<GetProductMenuResponse>>> => {
  try {
    const response = await Get({
      endpoint: `/api/fnb-product-service/menu/get-product-list`,
      headers: {
        'X-Transaction-Uuid': id,
      },
    })

    return response
  } catch (error) {
    const err = error as AxiosError
    throw err.response?.data
  }
}
