/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react'
import { Button } from 'posy-fnb-ds'
import { toRupiah } from 'utils/common'

interface MoleculesSectionAddToBasketProps {
  discount_price: number
  quantity: number
}

const MoleculesSectionAddToBasket = ({
  discount_price,
  quantity,
}: MoleculesSectionAddToBasketProps) => {
  const calculate = useMemo(() => discount_price * quantity, [quantity])

  return (
    <div className="mt-6">
      <Button fullWidth disabled={quantity === 0}>
        <div className="flex items-center justify-between">
          <p className="text-l-semibold">Add to Basket</p>
          <p className="text-xxl-semibold flex flex-1 justify-end">{toRupiah(calculate)}</p>
        </div>
      </Button>
    </div>
  )
}

export default MoleculesSectionAddToBasket
