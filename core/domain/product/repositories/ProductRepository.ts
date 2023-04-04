import { ProductsMenu } from '../models'
import { ResultQuery } from 'core/domain/vo/BaseResponse'

export type GetProductMenuListResult = ResultQuery<ProductsMenu> | undefined
