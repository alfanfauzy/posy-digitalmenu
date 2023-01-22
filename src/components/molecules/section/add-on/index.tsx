import React from 'react'
import { Checkbox, Radio } from 'posy-fnb-ds'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { onChangeAddOn } from 'store/slices/order'
import { toRupiah } from 'utils/common'
import type { Addon } from '@/types/product'

interface MoleculesSectionAddonProps {
  add_on: Addon[]
}

const MoleculesSectionAddon = ({ add_on }: MoleculesSectionAddonProps) => {
  const dispatch = useAppDispatch()
  const addOnVariant = useAppSelector((state) => state.order.orderForm.addOnVariant)

  const handleChangeAddon = (
    type: 'radio' | 'checkbox',
    variant: any,
    addOn: { addOnName: string; addOnUuid: string },
  ) =>
    dispatch(
      onChangeAddOn({
        type,
        addOnVariant: { addOnName: addOn.addOnName, addOnUuid: addOn.addOnUuid, ...variant },
      }),
    )

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
                  <div key={variant.variant_uuid}>
                    <Checkbox
                      value={variant.variant_uuid}
                      checked={addOnVariant?.some((el) => el.variant_uuid === variant.variant_uuid)}
                      onChange={() =>
                        handleChangeAddon('checkbox', variant, {
                          addOnName: addon.addon_name,
                          addOnUuid: addon.addon_uuid,
                        })
                      }
                      label={variant.price === 0 ? 'Free' : toRupiah(variant.price)}
                      title={variant.variant_name}
                    />
                    <div />
                    {addon.variant.length - 1 !== variant_idx && <div className="border-b" />}
                  </div>
                ) : (
                  <div key={variant.variant_uuid}>
                    <Radio
                      selectedValue={
                        addOnVariant?.find((el) => el.variant_uuid === variant.variant_uuid)
                          ?.variant_uuid || ''
                      }
                      value={variant.variant_uuid}
                      onChange={() =>
                        handleChangeAddon('radio', variant, {
                          addOnName: addon.addon_name,
                          addOnUuid: addon.addon_uuid,
                        })
                      }
                      label={variant.price === 0 ? 'Free' : toRupiah(variant.price)}
                      title={variant.variant_name}
                    />
                    {addon.variant.length - 1 !== variant_idx && <div className="border-b" />}
                  </div>
                ),
              )}
            </aside>
          </section>
        </aside>
      ))}
    </article>
  )
}

export default MoleculesSectionAddon
