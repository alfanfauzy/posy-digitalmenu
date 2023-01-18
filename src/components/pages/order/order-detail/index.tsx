/**
 *
 * PagesOrderDetail
 *
 */

import React, { useEffect, useState } from 'react'
import SectionBottomBar from '@/organisms/bottom-bar/item-quantity'
import FormOrder from '@/organisms/form/order'
import CardMenuDetail from '@/molecules/card/menu/detail'
import { useSelector } from 'react-redux'
import { RootState } from 'store/index'

const detail = {
  product_uuid: '76915a37-188c-46a8-a432-dc111ef6ad6e',
  product_name: 'Chicken Burger',
  product_description: 'lorem ipsum sip doloer amet',
  product_thumbnail: 'https://aws3.image.com/thumbnail.png',
  is_favourite: true,
  is_discount: true,
  price_before_discount: 33000,
  price_after_discount: 33000,
  is_available: true,
  cooking_duration: 0,
  addon: [
    {
      addon_uuid: '813724fb-6549-4fd3-9d34-f2f15aaadcda',
      addon_name: 'Tingkat Kepedasan',
      is_multiple: false,
      variant: [
        {
          variant_uuid: '024fdd2f-a333-4ccb-86c0-5e5c33fc187c',
          variant_name: 'level 0',
          price: 0,
        },
        {
          variant_uuid: 'a311bab-067d-48f3-8d17-fc00cd8e9d12',
          variant_name: 'level 2',
          price: 10000,
        },
      ],
    },
    {
      addon_uuid: '76d2b80e-e836-43db-ae63-8f307f0402ad',
      addon_name: 'Toping',
      is_multiple: true,
      variant: [
        {
          variant_uuid: 'b9d5532c-f9a9-4a1d-a8c3-d023644e5c67',
          variant_name: 'Telur Dadar',
          price: 5000,
        },
        {
          variant_uuid: '19e2d513-57cc-4d43-95ee-485b394e2dea',
          variant_name: 'Telur Bulat',
          price: 2500,
        },
        {
          variant_uuid: '19e2d513-57cc-4d43-95ee-485b394e2zao',
          variant_name: 'Telur Mata Sapi',
          price: 3000,
        },
        {
          variant_uuid: '19e2d513-57cc-4d43-95ee-485b394e2dan',
          variant_name: 'Telur Unta',
          price: 10000,
        },
      ],
    },
  ],
}

const PagesOrderDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(0)
  const [notes, setNotes] = useState('')
  const [value, setValue] = useState<any>({})

  useEffect(() => {
    setQuantity(1)
  }, [])

  console.log(notes, quantity, value)
  // const count = useSelector((state: RootState) => state.basket)
  // console.log(count)

  return (
    <main className="p-4 shadow-md">
      <CardMenuDetail product={detail} />
      <FormOrder
        add_on={detail.addon}
        notes={notes}
        setNotes={setNotes}
        value={value}
        setValue={setValue}
      />
      <SectionBottomBar product={detail} quantity={quantity} setQuantity={setQuantity} />
    </main>
  )
}

export default PagesOrderDetail
