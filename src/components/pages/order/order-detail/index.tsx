/**
 *
 * PagesOrderDetail
 *
 */

import React, { useEffect, useState } from 'react'
import SectionBottomBar from '@/organisms/bottom-bar/item-quantity'
import FormOrder from '@/organisms/form/order'
import CardMenuDetail from '@/molecules/card/menu/detail'

const detail = {
  name: 'Friend Cap Cay YAO',
  discount_price: 10000,
  normal_price: 15000,
  description:
    'Served mixed with meats such as chicken, liver, beef, shrimp, and slices of fish meatballs.',
  add_on: [
    {
      name: 'spicy lv 0',
      price: 0,
    },
    {
      name: 'spicy lv 1',
      price: 2000,
    },
    {
      name: 'spicy lv 2',
      price: 4000,
    },
    {
      name: 'spicy lv 3',
      price: 6000,
    },
  ],
}

const PagesOrderDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(0)
  const [notes, setNotes] = useState('')

  useEffect(() => {
    setQuantity(1)
  }, [])

  return (
    <main className="p-4 shadow-md">
      <CardMenuDetail props={detail} />
      <FormOrder props={{ ...detail, notes, setNotes }} />
      <SectionBottomBar props={{ discount_price: detail.discount_price, quantity, setQuantity }} />
    </main>
  )
}

export default PagesOrderDetail
