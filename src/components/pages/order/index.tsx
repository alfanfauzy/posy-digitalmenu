/**
 *
 * PagesOrder
 *
 */

import React from 'react'
import SectionFilter from '@/organisms/section/filter'
import SectionList from '@/organisms/section/list'
import HeaderOutletInfo from '@/molecules/header/outlet-info'
import FloatingButton from '@/atoms/button/float'

const PagesOrder: React.FC = () => (
  <main className="container mx-auto pt-4 shadow-md min-h-screen pb-28">
    <HeaderOutletInfo />
    <SectionFilter />
    <SectionList />
    <FloatingButton />
  </main>
)

export default PagesOrder
