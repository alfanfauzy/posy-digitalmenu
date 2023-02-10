import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { MdCancel } from 'react-icons/md'

interface AtomsInputSearchProps {
  open: boolean
  setOpen: (openSearch: boolean) => void
  value: string
  setValue: (value: string) => void
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const AtomsInputSearch = ({ open, setOpen, value, setValue, onSearch }: AtomsInputSearchProps) => {
  const onClearSearch = () => {
    setValue('')
    setOpen(false)
  }

  return (
    <div className={`transition-all duration-500 ease-in-out ${open ? '-ml-4 w-full' : 'w-1/3'}`}>
      <span className="relative flex h-full items-center justify-start">
        <div className="absolute left-4">
          <FiSearch size={16} className="stroke-neutral-90" />
        </div>
        <input
          onFocus={() => setOpen(true)}
          onBlur={
            value.length === 0 ? () => setTimeout(() => onClearSearch(), 100) : () => undefined
          }
          onChange={onSearch}
          value={value}
          type="text"
          placeholder="Search"
          className={`h-8 w-full rounded-full border border-neutral-70 pl-10 text-m-medium placeholder:text-neutral-80 focus:outline-neutral-50 ${
            open ? 'pr-10' : ''
          } `}
        />
        {value.length > 0 && (
          <div className="absolute right-4">
            <MdCancel
              size={20}
              className="cursor-pointer fill-neutral-60"
              onClick={onClearSearch}
            />
          </div>
        )}
      </span>
    </div>
  )
}

export default AtomsInputSearch
