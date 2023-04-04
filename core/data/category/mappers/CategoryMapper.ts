import { GetCategoryListResponse } from '../types'
import { Categorys } from 'core/domain/category/models'

export const mapToCategoryModel = (datas: Array<GetCategoryListResponse>): Categorys =>
  datas.map((data) => ({
    uuid: data.uuid,
    category_name: data.category_name,
    is_active: data.is_active,
  }))
