import { CategoryBased } from 'core/domain/category/models'

export type ProductBased = {
  uuid: string
  restaurant_uuid: string
  product_name: string
  product_description: string
  product_image_url: string
  categories: Array<CategoryBased>
  is_show: boolean
  is_available: boolean
  is_discount: boolean
  is_favourite: boolean
  price: number
  price_discount: number
  price_after_discount: number
  price_discount_percentage: number
  price_final: number
  cooking_duration: number
}

export type Products = Array<ProductBased>
export type Product = ProductBased

export type ProductMenu = {
  category_uuid: string
  category_name: string
  products: Products
}

export type ProductsMenu = Array<ProductMenu>
