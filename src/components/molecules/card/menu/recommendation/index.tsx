import React from 'react'
import { useRouter } from 'next/router'
import { Button } from 'posy-fnb-ds'
import ImageMenu from '@/molecules/image/menu'

interface MoleculesCardMenuRecommendationProps {
  soldOut?: boolean
}

const MoleculesCardMenuRecommendation = ({ soldOut }: MoleculesCardMenuRecommendationProps) => {
  const router = useRouter()

  return (
    <div className="relative">
      {soldOut && (
        <div className="bg-neutral-10 z-10 bg-opacity-40 absolute h-full w-full flex justify-center items-center pb-28">
          <p className="text-l-semibold text-center">Sold out</p>
        </div>
      )}
      <div>
        <ImageMenu
          onClick={() => router.push('/order/1')}
          label="Discount"
          timeLabel="in 15 min"
          isRecommended
          image={{ url: '/menu.png', alt: 'menu' }}
          // image={{ url: `data:image/jpeg;base64,${data}`, alt: 'menu' }}
        />

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
  )
}

export default MoleculesCardMenuRecommendation
