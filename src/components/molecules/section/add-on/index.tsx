import React, { useState } from 'react'
import { Checkbox } from 'posy-fnb-ds'
import { toRupiah } from 'utils/common'

interface MoleculesSectionAddonProps {
  add_on: { name: string; price: number }[]
}

const MoleculesSectionAddon = ({ add_on }: MoleculesSectionAddonProps) => {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <div className="mt-4">
        <p className="text-xl-semibold">Add on</p>
      </div>
      <section className="divide-y">
        <aside className="divide-y text-neutral-100 pb-4">
          {add_on.map((el) => (
            <Checkbox
              key={el.name}
              checked={checked}
              onChange={() => setChecked(!checked)}
              label={toRupiah(el.price)}
              title={el.name}
            />
          ))}
        </aside>
        <div />
      </section>
    </>
  )
}

export default MoleculesSectionAddon
