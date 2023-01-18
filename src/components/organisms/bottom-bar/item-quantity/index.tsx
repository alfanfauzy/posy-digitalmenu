import React from 'react'
import SectionQuantityCounter from '@/molecules/section/quantity-counter'
import SectionAddToBasket from '@/molecules/section/add-to-basket'
import type { Product } from '@/types/product'

interface OrganismsBottomBarItemQuantityProps {
  product: Product
  quantity: number
  setQuantity: (quantity: number) => void
}

const OrganismsBottomBarItemQuantity = ({
  product,
  quantity,
  setQuantity,
}: OrganismsBottomBarItemQuantityProps) => (
  <section
    style={{
      boxShadow: '0px -6px 24px rgb(0 0 0 / 10%)',
    }}
    className="-ml-4 z-20 rounded-t-2xl bg-neutral-10 fixed bottom-0 w-full max-w-[576px] px-4 pb-6 pt-8"
  >
    <SectionQuantityCounter quantity={quantity} setQuantity={setQuantity} />
    <SectionAddToBasket quantity={quantity} product={product} />
  </section>
)

export default OrganismsBottomBarItemQuantity
