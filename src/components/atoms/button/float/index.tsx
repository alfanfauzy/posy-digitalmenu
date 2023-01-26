import React, { useMemo } from 'react'
import { Button } from 'posy-fnb-ds'
import { BasketItem } from 'store/slices/basket'
import { toRupiah } from 'utils/common'
import { useAppSelector } from 'store/hooks'
import { calculateAddOn } from '@/molecules/section/add-to-basket'

const calculateTotal = (arr: BasketItem[]) =>
  [...arr]
    .map((el) => (calculateAddOn(el.addOnVariant) + el.product.price_after_discount) * el.quantity)
    .reduce((prev, current) => prev + current, 0)

export const calculateQuantity = (arr: { quantity: number }[]) =>
  [...arr].map((el) => el.quantity).reduce((prev, current) => prev + current, 0)

const AtomsButtonFloating = () => {
  const { basket } = useAppSelector((state) => state.basket)

  const totalQuantity = useMemo(() => calculateQuantity(basket), [basket])
  const totalPrice = useMemo(() => calculateTotal(basket), [basket])

  return (
    <div className="fixed bottom-20 z-30 w-full max-w-[576px] px-4">
      <Button style={{ boxShadow: '0px 6px 24px rgb(0 0 0 / 15%)' }} fullWidth>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-1 items-center gap-2">
            <p className="text-l-semibold">Basket</p>
            <p className="text-m-regular truncate">{`${totalQuantity} ${
              totalQuantity > 1 ? 'items' : 'item'
            }`}</p>
          </div>
          <p className="text-xxl-semibold flex flex-1 justify-end">{toRupiah(totalPrice)}</p>
        </div>
      </Button>
    </div>
  )
}

export default AtomsButtonFloating
