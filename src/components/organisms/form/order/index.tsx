import React from 'react'
import { Textarea } from 'posy-fnb-ds'
import SectionAddon from '@/molecules/section/add-on'
import { Addon } from '@/types/product'

interface OrganismsFormOrderProps {
  add_on: Addon[]
  notes: string
  setNotes: (notes: string) => void
  value: any
  setValue: (value: any) => void
}

const OrganismsFormOrder = ({
  add_on,
  notes,
  setNotes,
  value,
  setValue,
}: OrganismsFormOrderProps) => {
  const maxText = 200

  return (
    <>
      <SectionAddon add_on={add_on} value={value} setValue={setValue} />
      <section className="mt-4 mb-44">
        <Textarea
          className="h-32"
          labelText="Notes"
          fullwidth
          placeholder="Example: no onion, please"
          helperText={`${notes.length} / ${maxText}`}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          maxLength={maxText}
        />
      </section>
    </>
  )
}

export default OrganismsFormOrder
