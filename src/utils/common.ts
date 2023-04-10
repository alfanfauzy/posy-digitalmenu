import type { BasketItem } from 'store/slices/basket'
import { AddOnVariant } from 'store/slices/menu'

export const toRupiah = (number: number | bigint | string) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  })
    .format(Number(number))
    .replaceAll(',', '.')
    .replaceAll('IDR', 'Rp')

export const calculateAddOn = (arr: AddOnVariant[]) =>
  [...arr].map((el) => el.variant_price).reduce((prev, current) => prev + current, 0)

export const calculateTotal = (arr: Array<BasketItem>) =>
  [...arr]
    .map((el) => (calculateAddOn(el.addOnVariant) + el.product.detail.price_final) * el.quantity)
    .reduce((prev, current) => prev + current, 0)

export const calculateQuantity = (arr: { quantity: number }[]) =>
  [...arr].map((el) => el.quantity).reduce((prev, current) => prev + current, 0)

export const calculateOrder = (el: BasketItem) =>
  (calculateAddOn(el.addOnVariant) + el.product.detail.price_final) * el.quantity

export const calculateOrderBeforeDiscount = (el: BasketItem) =>
  (calculateAddOn(el.addOnVariant) + el.product.detail.price_discount) * el.quantity

export const calculateDiscount = (arr: Array<BasketItem>) =>
  [...arr]
    .map((el) => (calculateAddOn(el.addOnVariant) + el.product.detail.price_discount) * el.quantity)
    .reduce((prev, current) => prev + current, 0)

export const renderPrice = (
  available: boolean,
  price_after_discount: number,
  price_before_discount: number,
) => {
  if (!available) return 'Sold out'
  if (price_after_discount > 0) return toRupiah(price_after_discount)
  return toRupiah(price_before_discount)
}
