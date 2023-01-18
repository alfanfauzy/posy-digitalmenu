import React, { useMemo } from 'react'
import { Button } from 'posy-fnb-ds'
import { useSelector } from 'react-redux'
import { RootState } from 'store/index'
import { BasketItem } from 'store/basket'
import { toRupiah } from 'utils/common'

const calculateTotal = (arr: BasketItem[]) =>
  [...arr]
    .map((el) => el.product.price_after_discount * el.quantity)
    .reduce((prev, current) => prev + current, 0)

const calculateQuantity = (arr: BasketItem[]) =>
  [...arr].map((el) => el.quantity).reduce((prev, current) => prev + current, 0)

const AtomsButtonFloating = () => {
  const { basket } = useSelector((state: RootState) => state.basket)

  const totalQuantity = useMemo(() => calculateQuantity(basket), [basket])
  const totalPrice = useMemo(() => calculateTotal(basket), [basket])

  return (
    <div className="px-4 w-full max-w-[576px] fixed bottom-20 z-30">
      <Button style={{ boxShadow: '0px 6px 24px rgb(0 0 0 / 15%)' }} fullWidth>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-1">
            <p className="text-l-semibold">Basket</p>
            <p className="text-m-regular truncate">{`${totalQuantity} Item`}</p>
          </div>
          <p className="text-xxl-semibold flex flex-1 justify-end">{toRupiah(totalPrice)}</p>
        </div>
      </Button>
    </div>
  )
}

export default AtomsButtonFloating
