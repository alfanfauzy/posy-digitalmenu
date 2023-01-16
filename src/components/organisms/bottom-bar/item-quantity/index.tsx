import React from 'react'
import SectionAddToBasket from '@/molecules/section/add-to-basket'
import SectionQuantityCounter from '@/molecules/section/quantity-counter'

interface OrganismsBottomBarItemQuantityProps {
  props: {
    discount_price: number
    quantity: number
    setQuantity: (quantity: number) => void
  }
}

const OrganismsBottomBarItemQuantity = ({ props }: OrganismsBottomBarItemQuantityProps) => {
  const { discount_price, quantity, setQuantity } = props

  return (
    <section
      style={{
        boxShadow: '0px -6px 24px rgb(0 0 0 / 10%)',
      }}
      className="-ml-4 rounded-t-2xl bg-neutral-10 fixed bottom-0 w-full max-w-[576px] px-4 pb-6 pt-8"
    >
      <SectionQuantityCounter quantity={quantity} setQuantity={setQuantity} />
      <SectionAddToBasket quantity={quantity} discount_price={discount_price} />
    </section>
  )
}

export default OrganismsBottomBarItemQuantity
