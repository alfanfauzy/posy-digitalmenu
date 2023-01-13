import React from 'react'
import { Button } from 'posy-fnb-ds'

const AtomsButtonFloating = () => (
  <div className="px-4 w-full max-w-[576px] fixed bottom-20 z-30">
    <Button style={{ boxShadow: '0px 6px 24px rgb(0 0 0 / 15%)' }} fullWidth>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1">
          <p className="text-l-semibold">Basket</p>
          <p className="text-m-regular truncate">14224 Item</p>
        </div>
        <p className="text-xxl-semibold flex flex-1 justify-end">Rp16.000.000</p>
      </div>
    </Button>
  </div>
)

export default AtomsButtonFloating
