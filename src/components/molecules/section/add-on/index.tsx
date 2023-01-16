import React, { useState } from 'react'
import { Checkbox } from 'posy-fnb-ds'

const MoleculesSectionAddon = () => {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <div className="mt-4">
        <p className="text-xl-semibold">Add on</p>
      </div>
      <section className="divide-y">
        <aside className="divide-y text-neutral-100 pb-4">
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            label="0"
            title="Spicy lv 0"
          />
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            label="2.000"
            title="Spicy lv 1"
          />
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            label="4.000"
            title="Spicy lv 2"
          />
        </aside>
        <div />
      </section>
    </>
  )
}

export default MoleculesSectionAddon
