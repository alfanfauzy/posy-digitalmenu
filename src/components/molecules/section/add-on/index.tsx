import React, { useState } from 'react'
import { Checkbox, Radio } from 'posy-fnb-ds'
import { Addon } from '@/types/product'

interface MoleculesSectionAddonProps {
  add_on: Addon[]
  value: any
  setValue: (value: any) => void
}

const MoleculesSectionAddon = ({ add_on, value, setValue }: MoleculesSectionAddonProps) => {
  const [checked] = useState(false)

  const handleChange = (e: any, key: string) => setValue({ ...value, [key]: e })
  const handleChangeMultiple = (e: any, key: string) => setValue({ ...value, [key]: [e] })

  // useEffect(() => {
  //   const addonValue = add_on.map((el) => ({ [el.addon_name]: '' }))
  //   // console.log(addonValue)
  //   // setValue({ addonValue })
  // }, [])

  console.log(value)

  return (
    <article>
      {add_on.map((addon) => (
        <aside key={addon.addon_name}>
          <div className="mt-4">
            <p className="text-xl-semibold">{addon.addon_name}</p>
            <p className="text-m-regular">Required | select 1</p>
          </div>
          <section className="border-b">
            <aside className="text-neutral-100 pb-4">
              {addon.variant.map((variant, variant_idx) =>
                addon.is_multiple ? (
                  <>
                    <Checkbox
                      key={variant.variant_uuid}
                      value={variant}
                      checked={checked}
                      onChange={() => handleChangeMultiple(variant, addon.addon_name)}
                      label={variant.price === 0 ? 'Free' : variant.price.toString()}
                      title={variant.variant_name}
                    />
                    <div />
                    {addon.variant.length - 1 !== variant_idx && <div className="border-b" />}
                  </>
                ) : (
                  <>
                    <Radio
                      key={variant.variant_uuid}
                      selectedValue={value[addon.addon_name]}
                      value={variant}
                      onChange={() => handleChange(variant, addon.addon_name)}
                      label={variant.price === 0 ? 'Free' : variant.price.toString()}
                      title={variant.variant_name}
                    />
                    {addon.variant.length - 1 !== variant_idx && <div className="border-b" />}
                  </>
                ),
              )}
            </aside>
          </section>
        </aside>
      ))}

      {/* */}
    </article>
  )
}

export default MoleculesSectionAddon
