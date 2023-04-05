import { Category } from '../models'
import { ResultQuery } from 'core/domain/vo/BaseResponse'

/**
 * GET
 */

export type GetCategorysResult = ResultQuery<Category>
