/**
 *
 * PagesProductDetail
 *
 */

import React from 'react'
import SectionBottomBar from '@/organisms/section/bottom-bar'
import FormOrder from '@/organisms/form/order'
import CardMenuDetail from '@/molecules/card/menu/detail'

const PagesProductDetail: React.FC = () => (
  <main className="p-4 shadow-md">
    <CardMenuDetail />
    <FormOrder />
    <SectionBottomBar />
  </main>
)

export default PagesProductDetail
