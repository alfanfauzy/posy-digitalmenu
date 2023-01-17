import React, { useState } from 'react'
import { Checkbox, Radio } from 'posy-fnb-ds'
import { toRupiah } from 'utils/common'

interface MoleculesSectionAddonProps {
  add_on: { name: string; price: number }[]
}

const MoleculesSectionAddon = ({ add_on }: MoleculesSectionAddonProps) => {
  const [value, setValue] = useState('')

  const [checked, setChecked] = useState(false)

  const handleChange = (e: any) => setValue(e.target.value)

  return (
    <>
      <div className="mt-4">
        <p className="text-xl-semibold">Add on</p>
        <p className="text-m-regular">Required | select 1</p>
      </div>
      <section className="divide-y">
        <aside className="divide-y text-neutral-100 pb-4">
          {add_on.map((el) => (
            <Radio
              key={el.name}
              selectedValue={value}
              value={el.price.toString()}
              onChange={handleChange}
              label={toRupiah(el.price)}
              title={el.name}
            />
          ))}
        </aside>
        <div />
      </section>
      <div className="mt-4">
        <p className="text-xl-semibold">Additional Request</p>
        <p className="text-m-regular">Optional</p>
      </div>
      <section className="divide-y">
        <aside className="divide-y text-neutral-100 pb-4">
          {add_on.map((el) => (
            <Checkbox
              key={el.name}
              value={el.price.toString()}
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
