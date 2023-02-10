import React from 'react'
import { useRouter } from 'next/router'
import { Button } from 'posy-fnb-core'
import ImageMenu from '@/molecules/image/menu'

interface MoleculesCardMenuRecommendationProps {
  soldOut?: boolean
}

const MoleculesCardMenuRecommendation = ({ soldOut }: MoleculesCardMenuRecommendationProps) => {
  const router = useRouter()

  return (
    <div className="relative">
      {soldOut && (
        <div className="absolute z-10 flex h-full w-full items-center justify-center bg-neutral-10 bg-opacity-70 pb-28">
          <p className="text-center text-xxl-bold text-neutral-100">Sold out</p>
        </div>
      )}
      <div>
        <ImageMenu
          onClick={() => router.push('/menu/1')}
          label="Discount"
          timeLabel="in 15 min"
          isRecommended
          image={{ url: '/menu.png', alt: 'menu' }}
          // image={{ url: `data:image/jpeg;base64,${data}`, alt: 'menu' }}
        />

        <div className="mt-1">
          <p className="text-m-semibold">Fried Cap Cay</p>
          <div className="mt-1 flex items-center gap-1">
            <p className="text-l-medium">30.000</p>
            <p className="text-s-medium text-neutral-80 line-through">50.000</p>
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
