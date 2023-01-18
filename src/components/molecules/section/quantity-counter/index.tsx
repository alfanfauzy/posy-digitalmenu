/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import { IconButton } from 'posy-fnb-ds'
import { BiMinus, BiPlus } from 'react-icons/bi'

interface MoleculesSectionQuantityCounterProps {
  quantity: number
  setQuantity: (quantity: number) => void
}

const MoleculesSectionQuantityCounter = ({
  quantity,
  setQuantity,
}: MoleculesSectionQuantityCounterProps) => {
  const handleIncreamentQuantity = useCallback(() => setQuantity(quantity + 1), [quantity])
  const handleDecreamentQuantity = useCallback(() => setQuantity(quantity - 1), [quantity])

  return (
    <div className="flex items-center">
      <p className="text-xl-semibold flex-1 gap-4">Item Quantity</p>
      <div className="flex gap-3">
        <IconButton
          disabled={quantity === 0}
          onClick={() => quantity > 0 && handleDecreamentQuantity}
        >
          <BiMinus />
        </IconButton>
        <div>{quantity}</div>
        <IconButton onClick={handleIncreamentQuantity}>
          <BiPlus />
        </IconButton>
      </div>
    </div>
  )
}

export default MoleculesSectionQuantityCounter
