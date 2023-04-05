import { GetCategoryListResponse } from 'core/data/category/types'
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

export type VariantBased = {
  uuid: string
  variant_name: string
  variant_price: number
  variant_priority: number
}

export type Variant = VariantBased
export type Variants = Array<VariantBased>

export type AddonBased = {
  uuid: string
  addon_name: string
  is_optional: boolean
  can_choose_multiple: boolean
  min_variant: number
  max_variant: number
  priority: number
  variants: Array<Variant>
}

export type Addon = AddonBased
export type Addons = Array<AddonBased>

export type ProductDetailBased = {
  detail: {
    product: {
      uuid: string
      restaurant_uuid: string
      product_name: string
      product_description: string
      product_image_url: string
      categories: Array<GetCategoryListResponse>
    }
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
  addons: Addons
}

export type ProductDetail = ProductDetailBased
