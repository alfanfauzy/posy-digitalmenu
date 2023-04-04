import React from 'react'
import { useAppSelector } from 'store/hooks'
import SectionListRecommendation from '@/molecules/section/list/recommendation'
import SectionListMenu from '@/molecules/section/list/menu'
import CardMenuList from '@/molecules/card/menu/list'
import { Products, ProductsMenu } from 'core/domain/product/models'

interface OrganismsSectionListProps {
  data: ProductsMenu
  filteredData: Products
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
      <SectionListRecommendation data={data} />
      {data.map((el) => (
        <SectionListMenu data={el} key={el.category_uuid} />
      ))}
    </div>
  )
}

export default OrganismsSectionList
