/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useRouter } from 'next/router'
import { DropdownMobile } from 'posy-fnb-ds'
import { onChangeCategory } from 'store/slices/order'
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
  const { category } = useAppSelector((state) => state.order)

  const onChange = (e: { label: string; value: string }) => {
    dispatch(onChangeCategory(e))
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
        onChange={onChange}
        fullWidth
        placeholder="Choose Category"
        dropdownTitle="Choose Category"
      />
    </div>
  )
}

export default MoleculesSectionFilterCategory
