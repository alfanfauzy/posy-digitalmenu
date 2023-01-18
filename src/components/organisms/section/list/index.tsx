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
  <>
    <SectionListRecommendation />
    <SectionListMenu data={data} />
  </>
)

export default OrganismsSectionList
