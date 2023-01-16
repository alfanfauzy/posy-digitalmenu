import React from 'react'
import { Textarea } from 'posy-fnb-ds'
import SectionAddon from '@/molecules/section/add-on'

const OrganismsFormOrder = () => (
  <>
    <SectionAddon />
    <section className="mt-4 mb-44">
      <Textarea
        className="h-32"
        labelText="Notes"
        fullwidth
        placeholder="Example: no onion, please"
        helperText="0 / 200"
      />
    </section>
  </>
)

export default OrganismsFormOrder
