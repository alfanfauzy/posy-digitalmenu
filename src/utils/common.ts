import type { BasketItem } from 'store/slices/basket'

export const toRupiah = (number: number | bigint | string) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  })
    .format(Number(number))
    .replaceAll(',', '.')
    .replaceAll('IDR', 'Rp')

export const calculateAddOn = (arr: any[]) =>
  [...arr].map((el) => el.price).reduce((prev, current) => prev + current, 0)

export const calculateTotal = (arr: BasketItem[]) =>
  [...arr]
    .map((el) => (calculateAddOn(el.addOnVariant) + el.product.price_after_discount) * el.quantity)
    .reduce((prev, current) => prev + current, 0)

export const calculateQuantity = (arr: { quantity: number }[]) =>
  [...arr].map((el) => el.quantity).reduce((prev, current) => prev + current, 0)

export const calculateOrder = (el: BasketItem) =>
  (calculateAddOn(el.addOnVariant) + el.product.price_after_discount) * el.quantity

export const calculateOrderBeforeDiscount = (el: BasketItem) =>
  (calculateAddOn(el.addOnVariant) + el.product.price_before_discount) * el.quantity
