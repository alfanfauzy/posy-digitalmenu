import React, { useCallback } from 'react'
import { IconButton } from 'posy-fnb-ds'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { onChangeQuantity } from 'store/slices/order'

// interface MoleculesSectionQuantityCounterProps {}

const MoleculesSectionQuantityCounter = () => {
  const dispatch = useAppDispatch()
  const quantity = useAppSelector((state) => state.order.orderForm.quantity)

  const handleIncreamentQuantity = useCallback(
    () => dispatch(onChangeQuantity({ operator: 'plus', value: 1 })),
    [dispatch],
  )

  const handleDecreamentQuantity = useCallback(
    () => dispatch(onChangeQuantity({ operator: 'minus', value: 1 })),
    [dispatch],
  )

  return (
    <div className="flex items-center">
      <p className="text-xl-semibold flex-1 gap-4">Item Quantity</p>
      <div className="flex gap-3">
        <IconButton disabled={quantity === 0} onClick={handleDecreamentQuantity}>
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
