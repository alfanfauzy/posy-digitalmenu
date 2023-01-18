import React from 'react'
import CardMenuList from '@/molecules/card/menu/list'
import type { Product } from '@/types/product'

interface OrganismsSectionFilteredListProps {
  data: Product[]
}

const OrganismsSectionFilteredList = ({ data }: OrganismsSectionFilteredListProps) => (
  <div>
    {data.map((el) => (
      <CardMenuList key={el.product_name} product={el} />
    ))}
  </div>
)

export default OrganismsSectionFilteredList
