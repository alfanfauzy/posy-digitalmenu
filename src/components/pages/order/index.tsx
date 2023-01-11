/* eslint-disable react/no-array-index-key */
/**
 *
 * PagesOrder
 *
 */

import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { BottomNavigation, BottomSheet, Button, Label, TimeLabel } from 'posy-fnb-ds'
import { BiTimeFive } from 'react-icons/bi'
import { HiChevronDown } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { MdCancel } from 'react-icons/md'
import Bill from 'src/assets/bill'

const PagesOrder: React.FC = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const onToggle = () => setOpen(!open)

  const list = [
    {
      label: 'Order',
      value: 'order',
      icon: Bill,
    },
    {
      label: 'Bill',
      value: 'bill',
      icon: Bill,
    },
  ]

  const listCategory = [
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

  const handleChange = (e: string) => {
    router.push(`/${e}`)
  }

  const [openSearch, setOpenSearch] = useState(false)
  const [search, setSearch] = useState('')

  const [category, setCategory] = useState(listCategory[0])

  const onSearch = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value)
  }

  const onClearSearch = () => {
    setSearch('')
    setOpenSearch(false)
  }

  const onChangeCategory = (e: { label: string; value: string }) => {
    setCategory(e)
    setTimeout(() => {
      setOpen(false)
    }, 300)
    router.push(`#${e.value}`)
  }

  return (
    <main className="container mx-auto pt-4 shadow-md min-h-screen pb-20">
      <section className="bg-neutral-20 ml-4 flex items-center p-4 rounded-l-2xl">
        <div className="flex-1 gap-4">
          <p className="text-xl-semibold">Solaria</p>
          <p className="text-m-medium">Gambir, Selatan</p>
        </div>
        <div>
          <Image src="/solaria.png" priority alt="logo" width={60} height={60} />
        </div>
      </section>

      <section className="mt-2 flex gap-4 sticky top-0 z-50 bg-white p-4">
        <div
          className={`transition-all duration-500 ease-in-out ${
            openSearch ? 'opacity-0 w-0' : 'opacity-100 w-2/3'
          }`}
        >
          <Button onClick={onToggle} variant="secondary" size="l" fullWidth>
            <div className="flex items-center justify-between gap-2">
              <p className="text-m-medium">
                {category.value === 'all' ? 'Choose Category' : category.label}
              </p>
              <HiChevronDown size={20} />
            </div>
          </Button>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out ${
            openSearch ? 'w-full -ml-4' : 'w-1/3'
          }`}
        >
          <span className="relative h-full flex items-center justify-start">
            <div className="absolute left-4">
              <FiSearch size={20} className="stroke-neutral-90" />
            </div>
            <input
              onFocus={() => setOpenSearch(true)}
              onBlur={() => setTimeout(() => onClearSearch(), 100)}
              onChange={onSearch}
              value={search}
              type="text"
              placeholder="Search"
              className={`border border-neutral-70 pl-11 w-full h-11 rounded-full text-m-medium focus:outline-neutral-50 ${
                openSearch ? 'pr-11' : ''
              } `}
            />
            {search.length > 0 && (
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
      </section>

      <aside className="px-4" id="all">
        <p className="text-xxl-semibold">Our Recommendation</p>
      </aside>
      <section className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 px-4">
        {new Array(8).fill(undefined).map((_, idx) => (
          <div key={idx} className="relative">
            {idx % 2 === 0 && (
              <div className="bg-neutral-10 z-10 bg-opacity-40 absolute h-full w-full flex justify-center items-center pb-28">
                <p className="text-l-semibold text-center">Item Not Available</p>
              </div>
            )}
            <div>
              <div
                onClick={() => router.push(`${router.asPath}/23`)}
                role="presentation"
                className="h-52 relative transition duration-300 ease-in-out"
              >
                <Image
                  src="/menu.png"
                  alt="menu"
                  fill
                  priority
                  className="object-cover rounded-lg shadow-sm hover:bg-opacity-70"
                />

                <div className="absolute top-3">
                  <Label size="s" title="Promo" />
                </div>
                <div className="absolute bottom-3">
                  <TimeLabel startAdornment={<BiTimeFive />} size="s" title="in 15 min" />
                </div>
              </div>

              <div className="mt-1">
                <p className="text-m-semibold">Fried Cap Cay</p>
                <div className="flex items-center gap-1 mt-1">
                  <p className="text-l-medium">30.000</p>
                  <p className="text-s-medium line-through text-neutral-80">50.000</p>
                </div>
              </div>

              <div className="mt-2">
                <Button variant="secondary" size="m" fullWidth>
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-6" id="food">
        <aside className="px-4">
          <p className="text-xxl-semibold">Food</p>
        </aside>
        {new Array(4).fill(undefined).map((_, idx) => (
          <aside
            key={idx}
            className="w-full flex gap-4 hover:bg-neutral-20 active:animate-pulse transition duration-300 ease-in-out p-4"
          >
            <div className="flex-1">
              <p className="text-m-semibold">Rice + Chicken Crispy Black Pepper sauces</p>
              <p className="text-m-regular mt-1">
                Rice with Fried Chicken served with Blackpapper.
              </p>
              <p className="text-l-medium mt-2">33.000</p>
            </div>

            <div>
              <div className="relative w-[78px] h-[78px] mb-4">
                <Image
                  src="/menu.png"
                  alt="menu"
                  fill
                  sizes="100vw"
                  loading="lazy"
                  className="object-cover rounded-lg shadow-sm "
                />
              </div>
              <Button variant="secondary" size="xs">
                Add
              </Button>
            </div>
          </aside>
        ))}
      </section>

      <BottomSheet open={open} onClose={() => setOpen(false)} title="Choose Category">
        <div className="flex flex-col gap-3 mt-4 overflow-auto max-h-[560px]">
          {listCategory.map((el) => (
            <Button
              key={el.value}
              fullWidth
              value={el.value}
              variant={el.value === category.value ? 'primary' : 'secondary'}
              onClick={() => onChangeCategory(el)}
            >
              {el.label}
            </Button>
          ))}
        </div>
      </BottomSheet>

      <BottomNavigation list={list} onChange={handleChange} />
    </main>
  )
}

export default PagesOrder
