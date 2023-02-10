/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useRouter } from 'next/router'
import { DropdownMobile } from 'posy-fnb-core'
import { onChangeCategory } from 'store/slices/menu'
import { useAppDispatch, useAppSelector } from 'store/hooks'

interface MoleculesSectionFilterCategoryProps {
  listCategories: any[]
  openSearch: boolean
}

const MoleculesSectionFilterCategory = ({
  listCategories,
  openSearch,
}: MoleculesSectionFilterCategoryProps) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { category } = useAppSelector((state) => state.menu)

  const onChange = (e: { label: string; value: string }) => {
    dispatch(onChangeCategory(e))
    router.push(`#${e.value}`)
  }

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        openSearch ? 'w-0 opacity-0' : 'w-2/3 opacity-100'
      }`}
    >
      <DropdownMobile
        options={listCategories}
        value={category}
        onChange={onChange}
        fullWidth
        placeholder="Choose Category"
        dropdownTitle="Choose Category"
      />
    </div>
  )
}

export default MoleculesSectionFilterCategory
