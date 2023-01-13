import React from 'react'
import { useRouter } from 'next/router'
import { DropdownMobile } from 'posy-fnb-ds'

interface MoleculesSectionFilterCategoryProps {
  listCategories: any[]
  openSearch: boolean
  category: { label: string; value: string }
  setCategory: (category: { label: string; value: string }) => void
}

const MoleculesSectionFilterCategory = ({
  listCategories,
  openSearch,
  category,
  setCategory,
}: MoleculesSectionFilterCategoryProps) => {
  const router = useRouter()

  const onChangeCategory = (e: { label: string; value: string }) => {
    setCategory(e)
    router.push(`#${e.value}`)
  }

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        openSearch ? 'opacity-0 w-0' : 'opacity-100 w-2/3'
      }`}
    >
      <DropdownMobile
        options={listCategories}
        value={category}
        onChange={(e) => onChangeCategory(e)}
        fullWidth
        placeholder="Choose Category"
        dropdownTitle="Choose Category"
      />
    </div>
  )
}

export default MoleculesSectionFilterCategory
