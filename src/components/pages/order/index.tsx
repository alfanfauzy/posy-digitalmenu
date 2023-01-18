/**
 *
 * PagesOrder
 *
 */

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/index'
import SectionFilteredList from '@/organisms/section/list/filtered-list'
import SectionFilter from '@/organisms/section/filter'
import SectionList from '@/organisms/section/list'
import HeaderOutletInfo from '@/molecules/header/outlet-info'
import FloatingButton from '@/atoms/button/float'

const data = [
  {
    category_uuid: '76915a37-188c-46a8-a432-dc111ef6ad6e',
    category_name: 'Food',
    product: [
      {
        product_uuid: '76915a37-188c-46a8-a432-dc111ef6ad6e',
        product_name: 'Rice + Chicken Crispy Black Pepper sauces',
        product_description: 'lorem ipsum sip dolor amet',
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

const PagesOrder: React.FC = () => {
  const { basket } = useSelector((state: RootState) => state.basket)
  const [filteredData, setFilteredData] = useState<any[]>([])
  const [search, setSearch] = useState('')

  const onSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp(e.target.value, 'i')
    const newData = data
      .flatMap((el) => el.product)
      .filter(({ product_name }) => product_name.match(regex))
    setFilteredData(newData)
    setSearch(e.target.value)
  }

  return (
    <main className="container mx-auto pt-4 shadow-md min-h-screen pb-28">
      <HeaderOutletInfo />
      <SectionFilter onSearch={onSetSearch} search={search} setSearch={setSearch} />
      {search.length > 0 && <SectionFilteredList data={filteredData} />}
      {!search.length && <SectionList data={data} />}
      {basket.length > 0 && <FloatingButton />}
    </main>
  )
}

export default PagesOrder
