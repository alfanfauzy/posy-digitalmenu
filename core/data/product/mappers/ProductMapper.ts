import { GetProductMenuResponse } from '../types'
import { Products, ProductsMenu } from 'core/domain/product/models'

export const mapToProductMenuListModel = (datas: GetProductMenuResponse): ProductsMenu => {
  datas.objs.map((data) => ({}))
}
