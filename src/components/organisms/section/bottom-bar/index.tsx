import React from 'react'
import SectionAddToBasket from '@/molecules/section/add-to-basket'
import SectionQuantityCounter from '@/molecules/section/quantity-counter'

const OrganismsSectionBottomBar = () => (
  <section
    style={{
      boxShadow: '0px -6px 24px rgb(0 0 0 / 10%)',
    }}
    className="-ml-4 rounded-t-2xl bg-neutral-10 fixed bottom-0 w-full max-w-[576px] px-4 pb-6 pt-8"
  >
    <SectionQuantityCounter />
    <SectionAddToBasket />
  </section>
)

export default OrganismsSectionBottomBar
