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
    <div className={`transition-all duration-500 ease-in-out ${open ? 'w-full -ml-4' : 'w-1/3'}`}>
      <span className="relative h-full flex items-center justify-start">
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
          className={`border placeholder:text-neutral-80 border-neutral-70 pl-10 w-full h-8 rounded-full text-m-medium focus:outline-neutral-50 ${
            open ? 'pr-10' : ''
          } `}
        />
        {value.length > 0 && (
          <div className="absolute right-4">
            <MdCancel
              size={20}
              className="fill-neutral-60 cursor-pointer"
              onClick={onClearSearch}
            />
          </div>
        )}
      </span>
    </div>
  )
}

export default AtomsInputSearch
