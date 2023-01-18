import React from 'react'
import SectionListRecommendation from '@/molecules/section/list/recommendation'
import SectionListMenu from '@/molecules/section/list/menu'
import type { Product } from '@/types/product'

interface OrganismsSectionListProps {
  data: {
    category_name: string
    category_uuid: string
    product: Product[]
  }[]
}

const OrganismsSectionList = ({ data }: OrganismsSectionListProps) => (
  <div>
    <SectionListRecommendation />
    {data.map((el) => (
      <SectionListMenu data={el} key={el.category_uuid} />
    ))}
  </div>
)

export default OrganismsSectionList
