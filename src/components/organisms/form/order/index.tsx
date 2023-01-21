import React from 'react'
import { Textarea } from 'posy-fnb-ds'
import SectionAddon from '@/molecules/section/add-on'
import { Addon } from '@/types/product'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { onChangeNotes } from 'store/slices/order'

interface OrganismsFormOrderProps {
  add_on: Addon[]
}

const OrganismsFormOrder = ({ add_on }: OrganismsFormOrderProps) => {
  const dispatch = useAppDispatch()
  const notes = useAppSelector((state) => state.order.orderForm.notes)
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
          helperText={`${notes?.length} / ${maxText}`}
          value={notes}
          onChange={(e) => dispatch(onChangeNotes(e.target.value))}
          maxLength={maxText}
        />
      </section>
    </>
  )
}

export default OrganismsFormOrder
