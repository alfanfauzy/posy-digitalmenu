/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react'
import { Button } from 'posy-fnb-ds'
import { toRupiah } from 'utils/common'
import { addToBasket } from 'store/slices/basket'
import { useRouter } from 'next/router'
import type { Product } from '@/types/product'
import { useAppDispatch } from 'store/hooks'

interface MoleculesSectionAddToBasketProps {
  product: Product
  quantity: number
}

const MoleculesSectionAddToBasket = ({ product, quantity }: MoleculesSectionAddToBasketProps) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const calculate = useMemo(() => product.price_after_discount * quantity, [quantity])

  const handleAddToBasket = () => {
    dispatch(
      addToBasket({
        quantity,
        product,
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
          <p className="text-xxl-semibold flex flex-1 justify-end">{toRupiah(calculate)}</p>
        </div>
      </Button>
    </div>
  )
}

export default MoleculesSectionAddToBasket
