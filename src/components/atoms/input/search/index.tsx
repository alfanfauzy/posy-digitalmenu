import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { MdCancel } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { onChangeSearch, onClearSearch } from 'store/slices/menu'

interface AtomsInputSearchProps {
  isOpen: boolean
  open: () => void
  close: () => void
  menus: any[]
}
const AtomsInputSearch = ({ isOpen, open, close, menus }: AtomsInputSearchProps) => {
  const dispatch = useAppDispatch()
  const { search } = useAppSelector((state) => state.menu)

  const onClear = () => {
    dispatch(onClearSearch())
    close()
  }

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeSearch({ search: e.target.value, menus }))
  }

  return (
    <div className={`transition-all duration-500 ease-in-out ${isOpen ? '-ml-4 w-full' : 'w-1/3'}`}>
      <span className="relative flex h-full items-center justify-start">
        <div className="absolute left-4">
          <FiSearch size={16} className="stroke-neutral-90" />
        </div>
        <input
          onFocus={open}
          onBlur={search.length === 0 ? () => setTimeout(() => onClear(), 100) : () => undefined}
          onChange={onSearch}
          value={search}
          type="text"
          placeholder="Search"
          className={`h-8 w-full rounded-full border border-neutral-70 pl-10 text-m-medium placeholder:text-neutral-80 focus:outline-neutral-50 ${
            isOpen ? 'pr-10' : ''
          } `}
        />
        {search.length > 0 && (
          <div className="absolute right-4">
            <MdCancel size={20} className="cursor-pointer fill-neutral-60" onClick={onClear} />
          </div>
        )}
      </span>
    </div>
  )
}

export default AtomsInputSearch
