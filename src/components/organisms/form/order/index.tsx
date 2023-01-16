import React from 'react'
import { Textarea } from 'posy-fnb-ds'
import SectionAddon from '@/molecules/section/add-on'

interface OrganismsFormOrderProps {
  props: {
    add_on: { name: string; price: number }[]
    notes: string
    setNotes: (notes: string) => void
  }
}

const OrganismsFormOrder = ({ props }: OrganismsFormOrderProps) => {
  const { add_on, notes, setNotes } = props
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
