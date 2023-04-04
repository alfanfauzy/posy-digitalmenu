/**
 *
 * PagesMenu
 *
 */

import dynamic from 'next/dynamic'
import React from 'react'
import { useAppSelector } from 'store/hooks'
import SectionFilter from '@/organisms/section/filter'
import SectionList from '@/organisms/section/list'
import HeaderOutletInfo from '@/molecules/header/outlet-info'

const FloatingButton = dynamic(() => import('@/atoms/button/float'), { ssr: false })

const data = [
  {
    category_uuid: '76915a37-188c-46a8-a432-dc111ef6ad622e',
    category_name: 'Food',
    product: [
      {
        product_uuid: '76915a37-188c-46a8-a432-dc111ef6ad6e',
        product_name: 'Rice + Chicken Crispy Black Pepper sauces ice ',
        product_description: 'lorem ipsum sip dolor amet lorem ilorem ipsum sip dolor amet amet',
        is_favourite: true,
        is_discount: false,
        price_before_discount: 33000,
        price_after_discount: 33000,
        is_available: true,
        cooking_duration: 0,
      },
      {
        product_uuid: 'a1c34af5-f174-47d0-b4c6-25681a146494',
        product_name: 'Chicken Geprek Crispy',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: false,
        is_discount: true,
        price_before_discount: 241241,
        price_after_discount: 11122,
        is_available: true,
        cooking_duration: 15,
      },
      {
        product_uuid: 'a1c34af5-f174-47d0-b4c6-25681a146494',
        product_name: 'Chicken Geprek Mentai',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: false,
        is_discount: true,
        price_before_discount: 34313,
        price_after_discount: 12424,
        is_available: true,
        cooking_duration: 15,
      },
      {
        product_uuid: 'a1c34af5-f174-47d0-b4c6-25681a146494',
        product_name: 'Chicken Geprek Blackpepper',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: false,
        is_discount: true,
        price_before_discount: 44444,
        price_after_discount: 12422,
        is_available: false,
        cooking_duration: 15,
      },
    ],
  },
  {
    category_uuid: '19625486-f956-4a95-88b8-15b4fccd1713',
    category_name: 'Drinks',
    product: [
      {
        product_uuid: '9fe65699-7960-4893-99fd-fa4d489f0841',
        product_name: 'Ice Tea',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: true,
        is_discount: false,
        price_before_discount: 7000,
        price_after_discount: 5000,
        is_available: true,
        cooking_duration: 0,
      },
      {
        product_uuid: '9fe65699-7960-4893-99fd-fa4d489f0841',
        product_name: 'Americano',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: true,
        is_discount: false,
        price_before_discount: 7000,
        price_after_discount: 3000,
        is_available: false,
        cooking_duration: 0,
      },
      {
        product_uuid: '9fe65699-7960-4893-99fd-fa4d489f0841',
        product_name: 'Orange Juice',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: true,
        is_discount: false,
        price_before_discount: 15000,
        price_after_discount: 12000,
        is_available: true,
        cooking_duration: 0,
      },
      {
        product_uuid: '9fe65699-7960-4893-99fd-fa4d489f0841',
        product_name: 'Hazelnut Latte',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: true,
        is_discount: false,
        price_before_discount: 20000,
        price_after_discount: 10000,
        is_available: false,
        cooking_duration: 0,
      },
      {
        product_uuid: '9fe65699-7960-4893-99fd-fa4d489f0841',
        product_name: 'Coffee Latte',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: true,
        is_discount: false,
        price_before_discount: 8000,
        price_after_discount: 4000,
        is_available: false,
        cooking_duration: 0,
      },
    ],
  },
  {
    category_uuid: '19625486-f956-4a95-88b8-ccacasscc31214',
    category_name: 'Dessert',
    product: [
      {
        product_uuid: '9fe65699-7960-4893-99fd-fa4d489f0841',
        product_name: 'Pudding',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: true,
        is_discount: false,
        price_before_discount: 7000,
        price_after_discount: 5000,
        is_available: true,
        cooking_duration: 0,
      },
      {
        product_uuid: '9fe65699-7960-4893-99fd-fa4d489f0841',
        product_name: 'wkwk Latte',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: true,
        is_discount: false,
        price_before_discount: 20000,
        price_after_discount: 10000,
        is_available: false,
        cooking_duration: 0,
      },
      {
        product_uuid: '9fe65699-7960-4893-99fd-fa4d489f0841',
        product_name: 'ada aja Latte',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: true,
        is_discount: false,
        price_before_discount: 8000,
        price_after_discount: 4000,
        is_available: false,
        cooking_duration: 0,
      },
      {
        product_uuid: '9fe65699-7960-4893-99fd-fa4d489f0841',
        product_name: 'yow aja',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: true,
        is_discount: false,
        price_before_discount: 8000,
        price_after_discount: 4000,
        is_available: false,
        cooking_duration: 0,
      },
      {
        product_uuid: '9fe65699-7960-4893-99fd-fa4d489f0841',
        product_name: 'enak aja Latte',
        product_description: 'lorem ipsum sip dolor amet',
        is_favourite: true,
        is_discount: false,
        price_before_discount: 8000,
        price_after_discount: 4000,
        is_available: false,
        cooking_duration: 0,
      },
    ],
  },
]

const PagesMenu: React.FC = () => {
  const { basket } = useAppSelector((state) => state.basket)
  const { filteredMenu } = useAppSelector((state) => state.menu)
  const { objs: product } = useAppSelector((state) => state.product)

  return (
    <main className="container mx-auto min-h-screen pt-4 pb-28 shadow-md">
      <HeaderOutletInfo />
      <SectionFilter menus={product} />
      <SectionList data={product} filteredData={filteredMenu} />
      {basket.length > 0 && <FloatingButton />}
    </main>
  )
}

export default PagesMenu
