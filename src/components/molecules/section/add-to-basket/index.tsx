/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react'
import { Button } from 'posy-fnb-ds'
import { toRupiah } from 'utils/common'
import { addToBasket } from 'store/slices/basket'
import { useRouter } from 'next/router'
import type { Product } from '@/types/product'
import { useAppDispatch, useAppSelector } from 'store/hooks'

export const calculateAddOn = (arr: any[]) =>
  [...arr].map((el) => el.price).reduce((prev, current) => prev + current, 0)

interface MoleculesSectionAddToBasketProps {
  product: Product
}

const MoleculesSectionAddToBasket = ({ product }: MoleculesSectionAddToBasketProps) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const quantity = useAppSelector((state) => state.order.orderForm.quantity)
  const addOnVariant = useAppSelector((state) => state.order.orderForm.addOnVariant)
  const total = useMemo(
    () => (calculateAddOn(addOnVariant) + product.price_after_discount) * quantity,
    [quantity, addOnVariant],
  )

  const handleAddToBasket = () => {
    dispatch(
      addToBasket({
        quantity,
        product,
        addOnVariant,
        counter: Math.floor(Math.random() * Date.now()),
      }),
    )
    setTimeout(() => {
      router.back()
    }, 500)
  }

  return (
    <div className="mt-6">
      <Button onClick={handleAddToBasket} fullWidth disabled={quantity === 0}>
        <div className="flex items-center justify-between">
          <p className="text-l-semibold">Add to Basket</p>
          <p className="text-xxl-semibold flex flex-1 justify-end">{toRupiah(total)}</p>
        </div>
      </Button>
    </div>
  )
}

export default MoleculesSectionAddToBasket
