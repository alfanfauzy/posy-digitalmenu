/**
 *
 * PagesOrder
 *
 */

import React from 'react'
import { useSelector } from 'react-redux'
import SectionFilter from '@/organisms/section/filter'
import SectionList from '@/organisms/section/list'
import HeaderOutletInfo from '@/molecules/header/outlet-info'
import FloatingButton from '@/atoms/button/float'
import { RootState } from 'store/index'

const PagesOrder: React.FC = () => {
  const { basket } = useSelector((state: RootState) => state.basket)

  return (
    <main className="container mx-auto pt-4 shadow-md min-h-screen pb-28">
      <HeaderOutletInfo />
      <SectionFilter />
      <SectionList />
      {basket.length > 0 && <FloatingButton />}
    </main>
  )
}

export default PagesOrder
