import React from 'react'
import useDisclosure from '@/hooks/useDisclosure'
import useShadowScroll from '@/hooks/shadow-scroll'
import { useAppDispatch } from 'store/hooks'
import { onChangeSearch, onClearSearch } from 'store/slices/menu'
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

interface OrganismsSectionFilterProps {
  menus: any[]
}

const OrganismsSectionFilter = ({ menus }: OrganismsSectionFilterProps) => {
  const dispatch = useAppDispatch()
  const shadow = useShadowScroll()
  const [openSearch, { open, close }] = useDisclosure({ initialState: false })

  const onClear = () => {
    dispatch(onClearSearch())
    close()
  }

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeSearch({ search: e.target.value, menus }))
  }

  return (
    <section
      style={{
        boxShadow: shadow ? '0px 6px 24px rgb(0 0 0 / 15%)' : 'none',
        transition: 'box-shadow 0.5s',
      }}
      className="sticky top-0 z-50 mt-2 flex gap-4 bg-white p-4"
    >
      <MoleculesSectionFilterCategory listCategories={listCategories} openSearch={openSearch} />
      <InputSearch isOpen={openSearch} open={open} onClearSearch={onClear} onSearch={onSearch} />
    </section>
  )
}

export default OrganismsSectionFilter
