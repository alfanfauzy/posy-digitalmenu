import React from 'react'
import { useAppSelector } from 'store/hooks'
import SectionListRecommendation from '@/molecules/section/list/recommendation'
import SectionListMenu from '@/molecules/section/list/menu'
import CardMenuList from '@/molecules/card/menu/list'
import type { Product } from '@/types/product'

interface OrganismsSectionListProps {
  data: {
    category_name: string
    category_uuid: string
    product: Product[]
  }[]
  filteredData: Product[]
}

const OrganismsSectionList = ({ data, filteredData }: OrganismsSectionListProps) => {
  const { search } = useAppSelector((state) => state.menu)

  if (search.length > 0) {
    return (
      <div>
        {filteredData.map((el) => (
          <CardMenuList key={el.product_name} product={el} />
        ))}
      </div>
    )
  }

  return (
    <div>
      <SectionListRecommendation />
      {data.map((el) => (
        <SectionListMenu data={el} key={el.category_uuid} />
      ))}
    </div>
  )
}

export default OrganismsSectionList
