import React from 'react'
import CardMenuList from '@/molecules/card/menu/list'
import type { Product } from '@/types/product'

interface MoleculesSectionListMenuProps {
  data: { product: Product[]; category_name: string; category_uuid: string }[]
}

const MoleculesSectionListMenu = ({ data }: MoleculesSectionListMenuProps) => (
  <>
    {data.map((el) => (
      <section key={el.category_name} className="mt-6" id={el.category_name.toLowerCase()}>
        <aside className="px-4 mb-2">
          <p className="text-xxl-semibold">{el.category_name}</p>
        </aside>
        {el.product.map((product) => (
          <CardMenuList key={product.product_name} product={product} />
        ))}
      </section>
    ))}
  </>
)

export default MoleculesSectionListMenu
