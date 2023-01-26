import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Button } from 'posy-fnb-ds'
import { calculateQuantity, calculateTotal, toRupiah } from 'utils/common'
import { useAppSelector } from 'store/hooks'

const AtomsButtonFloating = () => {
  const router = useRouter()
  const { basket } = useAppSelector((state) => state.basket)

  const totalQuantity = useMemo(() => calculateQuantity(basket), [basket])
  const totalPrice = useMemo(() => calculateTotal(basket), [basket])

  const goToBasket = () => router.push('/basket')

  return (
    <div className="fixed bottom-20 z-30 w-full max-w-[576px] px-4">
      <Button onClick={goToBasket} style={{ boxShadow: '0px 6px 24px rgb(0 0 0 / 15%)' }} fullWidth>
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
