import { GetCategoryListResponse } from '../types'
import { Categories } from 'core/domain/category/models'

export const mapToCategoryModel = (datas: Array<GetCategoryListResponse>): Categories =>
  datas.map((data) => ({
    uuid: data.uuid,
    category_name: data.category_name,
    is_active: data.is_active,
  }))
