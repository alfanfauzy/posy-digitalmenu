/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Button } from 'posy-fnb-core'
import { calculateAddOn, toRupiah } from 'utils/common'
import { addToBasket, dropFromBasket, updateBasket } from 'store/slices/basket'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import type { Product } from '@/types/product'

interface MoleculesSectionAddToBasketProps {
  product: Product
}

const MoleculesSectionAddToBasket = ({ product }: MoleculesSectionAddToBasketProps) => {
  const router = useRouter()
  const { counter } = router.query
  const dispatch = useAppDispatch()
  const quantity = useAppSelector((state) => state.menu.orderForm.quantity)
  const addOnVariant = useAppSelector((state) => state.menu.orderForm.addOnVariant)
  const notes = useAppSelector((state) => state.menu.orderForm.notes)

  const total = useMemo(
    () => (calculateAddOn(addOnVariant) + product.price_after_discount) * quantity,
    [quantity, addOnVariant],
  )

  const goBack = () => {
    setTimeout(() => {
      router.back()
    }, 300)
  }

  const handleAddToBasket = () => {
    dispatch(
      addToBasket({
        quantity,
        product,
        addOnVariant,
        notes,
        counter: Math.floor(Math.random() * Date.now()),
      }),
    )
    goBack()
  }

  const handleUpdateBasket = (basketId: number) => {
    dispatch(
      updateBasket({
        quantity,
        product,
        addOnVariant,
        notes,
        counter: +basketId,
      }),
    )
    goBack()
  }

  const handleDropFromBasket = (basketId: number) => {
    dispatch(dropFromBasket({ counter: basketId }))
    goBack()
  }

  if (counter && quantity === 0) {
    return (
      <div className="mt-6">
        <Button onClick={() => handleDropFromBasket(+counter)} fullWidth variant="red-accent">
          <p className="text-l-semibold">Remove</p>
        </Button>
      </div>
    )
  }

  if (!counter && quantity === 0) {
    return (
      <div className="mt-6">
        <Button onClick={goBack} fullWidth variant="primary">
          <p className="text-l-semibold">Back to Menu</p>
        </Button>
      </div>
    )
  }

  if (counter) {
    return (
      <div className="mt-6">
        <Button onClick={() => handleUpdateBasket(+counter)} fullWidth variant="primary">
          <div className="flex items-center justify-between">
            <p className="text-l-semibold">Update a Basket</p>
            <p className="flex flex-1 justify-end text-xxl-semibold">{toRupiah(total)}</p>
          </div>
        </Button>
      </div>
    )
  }

  return (
    <div className="mt-6">
      <Button onClick={handleAddToBasket} fullWidth variant="primary">
        <div className="flex items-center justify-between">
          <p className="text-l-semibold">Add to Basket</p>
          <p className="flex flex-1 justify-end text-xxl-semibold">{toRupiah(total)}</p>
        </div>
      </Button>
    </div>
  )
}

export default MoleculesSectionAddToBasket
