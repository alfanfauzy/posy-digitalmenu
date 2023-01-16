import React, { useState } from 'react'
import { IconButton } from 'posy-fnb-ds'
import { BiMinus, BiPlus } from 'react-icons/bi'

const MoleculesSectionQuantityCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex items-center">
      <p className="text-xl-semibold flex-1 gap-4">Item Quantity</p>
      <div className="flex gap-3">
        <IconButton disabled={count === 0} onClick={() => count > 0 && setCount(count - 1)}>
          <BiMinus />
        </IconButton>
        <div>{count}</div>
        <IconButton onClick={() => setCount(count + 1)}>
          <BiPlus />
        </IconButton>
      </div>
    </div>
  )
}

export default MoleculesSectionQuantityCounter
