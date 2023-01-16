import React from 'react'
import { useRouter } from 'next/router'
import { Button } from 'posy-fnb-ds'
import ImageMenu from '@/molecules/image/menu'

interface MoleculesCardMenuListProps {
  soldOut?: boolean
}

const MoleculesCardMenuList = ({ soldOut }: MoleculesCardMenuListProps) => {
  const router = useRouter()

  return (
    <div className="relative">
      {soldOut && (
        <div className="bg-neutral-10 z-10 bg-opacity-40 absolute h-full w-full flex justify-center items-center pb-28" />
      )}
      <aside
        role="presentation"
        onClick={() => router.push('/order/23')}
        className="w-full flex gap-4 hover:bg-neutral-20 active:animate-pulse transition duration-300 ease-in-out p-4"
      >
        <div className="flex-1">
          <p className="text-m-semibold">Rice + Chicken Crispy Black Pepper sauces</p>
          <p className="text-m-regular mt-1">Rice with Fried Chicken served with Blackpapper.</p>
          <p className="text-l-medium mt-2">{soldOut ? 'Sold out' : '30.000'}</p>
        </div>

        <div>
          <ImageMenu image={{ url: '/menu.png', alt: 'menu' }} size="s" className="mb-4" />
          <Button variant="secondary" size="xs">
            Add
          </Button>
        </div>
      </aside>
    </div>
  )
}

export default MoleculesCardMenuList
