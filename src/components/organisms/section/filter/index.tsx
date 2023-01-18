import React, { useState } from 'react'
import useShadowScroll from '@/hooks/shadow-scroll'
import MoleculesSectionFilterCategory from '@/molecules/section/filter-category'
import InputSearch from '@/atoms/input/search'

const listCategories = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Food',
    value: 'food',
  },
  {
    label: 'Drinks',
    value: 'drinks',
  },
  {
    label: 'Dessert',
    value: 'dessert',
  },
]

interface OrganismsSectionFilter {
  search: string
  setSearch: (search: string) => void
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const OrganismsSectionFilter = ({ search, onSearch, setSearch }: OrganismsSectionFilter) => {
  const shadow = useShadowScroll()
  const [openSearch, setOpenSearch] = useState(false)

  return (
    <section
      style={{
        boxShadow: shadow ? '0px 6px 24px rgb(0 0 0 / 15%)' : 'none',
        transition: 'box-shadow 0.5s',
      }}
      className="mt-2 flex gap-4 sticky top-0 z-50 bg-white p-4"
    >
      <MoleculesSectionFilterCategory listCategories={listCategories} openSearch={openSearch} />
      <InputSearch
        open={openSearch}
        setOpen={setOpenSearch}
        value={search}
        setValue={setSearch}
        onSearch={onSearch}
      />
    </section>
  )
}

export default OrganismsSectionFilter
