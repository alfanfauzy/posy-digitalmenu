import React from 'react'
import { IconButton } from 'posy-fnb-ds'
import { BiMinus, BiPlus } from 'react-icons/bi'

interface MoleculesSectionQuantityCounterProps {
  quantity: number
  setQuantity: (quantity: number) => void
}

const MoleculesSectionQuantityCounter = ({
  quantity,
  setQuantity,
}: MoleculesSectionQuantityCounterProps) => (
  <div className="flex items-center">
    <p className="text-xl-semibold flex-1 gap-4">Item Quantity</p>
    <div className="flex gap-3">
      <IconButton
        disabled={quantity === 0}
        onClick={() => quantity > 0 && setQuantity(quantity - 1)}
      >
        <BiMinus />
      </IconButton>
      <div>{quantity}</div>
      <IconButton onClick={() => setQuantity(quantity + 1)}>
        <BiPlus />
      </IconButton>
    </div>
  </div>
)

export default MoleculesSectionQuantityCounter
