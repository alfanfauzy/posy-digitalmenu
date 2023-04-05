import React from 'react'
import { Checkbox, Radio } from 'posy-fnb-core'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { onChangeAddOn } from 'store/slices/menu'
import { toRupiah } from 'utils/common'
import { Addons } from 'core/domain/product/models'

interface MoleculesSectionAddonProps {
  add_on: Addons
}

const MoleculesSectionAddon = ({ add_on }: MoleculesSectionAddonProps) => {
  const dispatch = useAppDispatch()
  const addOnVariant = useAppSelector((state) => state.menu.orderForm.addOnVariant)

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
      {add_on.map((addon, id) => (
        <aside key={addon.addon_name}>
          <div className="mt-4">
            <p className="text-xl-semibold">{addon.addon_name}</p>
            <p className="text-m-regular">
              {!addon.is_optional && `Required | `}Select {id + 1}
            </p>
          </div>
          <section className="border-b">
            <aside className="pb-4 text-neutral-100">
              {addon.variants.map((variant, variant_idx) =>
                addon.can_choose_multiple ? (
                  <div key={variant.uuid}>
                    <Checkbox
                      size="m"
                      value={variant.uuid}
                      checked={addOnVariant?.some((el) => el.variant_uuid === variant.uuid)}
                      onChange={() =>
                        handleChangeAddon('checkbox', variant, {
                          addOnName: addon.addon_name,
                          addOnUuid: addon.uuid,
                        })
                      }
                      label={
                        !variant.variant_price || variant.variant_price === 0
                          ? 'Free'
                          : toRupiah(variant.variant_price)
                      }
                      title={variant.variant_name}
                    />
                    <div />
                    {addon.variants.length - 1 !== variant_idx && <div className="border-b" />}
                  </div>
                ) : (
                  <div key={variant.uuid}>
                    <Radio
                      selectedValue={
                        addOnVariant?.find((el) => el.variant_uuid === variant.uuid)
                          ?.variant_uuid || ''
                      }
                      value={variant.uuid}
                      onChange={() =>
                        handleChangeAddon('radio', variant, {
                          addOnName: addon.addon_name,
                          addOnUuid: addon.uuid,
                        })
                      }
                      label={
                        !variant.variant_price || variant.variant_price === 0
                          ? 'Free'
                          : toRupiah(variant.variant_price)
                      }
                      title={variant.variant_name}
                    />
                    {addon.variants.length - 1 !== variant_idx && <div className="border-b" />}
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
