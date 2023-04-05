import React from 'react'
import { Textarea } from 'posy-fnb-core'
import SectionAddon from '@/molecules/section/add-on'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { onChangeNotes } from 'store/slices/menu'
import { Addons } from 'core/domain/addon/model'

interface OrganismsFormOrderProps {
  add_on: Addons
}

const OrganismsFormOrder = ({ add_on }: OrganismsFormOrderProps) => {
  const dispatch = useAppDispatch()
  const notes = useAppSelector((state) => state.menu.orderForm.notes)
  const maxText = 200

  return (
    <>
      <SectionAddon add_on={add_on} />
      <section className="mt-4 mb-44">
        <Textarea
          className="h-32"
          labelText="Notes"
          fullwidth
          placeholder="Example: no onion, please"
          helperText={`${notes?.length || 0} / ${maxText}`}
          value={notes}
          onChange={(e) => dispatch(onChangeNotes(e.target.value))}
          maxLength={maxText}
        />
      </section>
    </>
  )
}

export default OrganismsFormOrder
