/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import InputSearch from '@/atoms/input/search'
import MoleculesSectionFilterCategory from '@/molecules/section/filter-category'
import { useRouter } from 'next/router'

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

const OrganismsSectionFilter = () => {
  const router = useRouter()
  const [openSearch, setOpenSearch] = useState(false)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState({ label: '', value: '' })

  const getCategory = () => {
    const selectedCategory = router.asPath.match(/#(.*)/)
    if (selectedCategory && selectedCategory[1]) {
      return { label: selectedCategory[1], value: selectedCategory[1] }
    }
    return null
  }

  useEffect(() => {
    setCategory(getCategory() || listCategories[0])
  }, [])

  return (
    <section
      // style={{ boxShadow: '0px 6px 24px rgb(0 0 0 / 10%)' }}
      className="mt-2 flex gap-4 sticky top-0 z-50 bg-white p-4"
    >
      <MoleculesSectionFilterCategory
        listCategories={listCategories}
        openSearch={openSearch}
        category={category}
        setCategory={setCategory}
      />
      <InputSearch
        open={openSearch}
        setOpen={setOpenSearch}
        search={search}
        setSearch={setSearch}
      />
    </section>
  )
}

export default OrganismsSectionFilter
