import { Product } from 'core/domain/product/models'

export type GetProductMenuResponse = {
  category_uuid: string
  category_name: string
  products: Array<Product>
}
