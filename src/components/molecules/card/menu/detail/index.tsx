import React from 'react'
import ImageMenu from '@/molecules/image/menu'
import { toRupiah } from 'utils/common'

interface MoleculesCardMenuDetailProps {
  props: {
    name: string
    normal_price: number
    discount_price: number
    description: string
  }
}

const MoleculesCardMenuDetail = ({ props }: MoleculesCardMenuDetailProps) => {
  const { description, name, discount_price, normal_price } = props

  return (
    <article>
      <ImageMenu
        image={{ url: '/menu.png', alt: 'menu' }}
        timeLabel="in 15 min"
        label="Discount"
        size="l"
        isRecommended
      />
      <aside className="mt-4 divide-y">
        <div className="pb-4">
          <p className="text-xxl-bold">{name}</p>
          <div className="flex items-center gap-2">
            <p className="text-xxl-regular">{toRupiah(discount_price)}</p>
            <p className="text-xxl-regular line-through text-neutral-70">
              {toRupiah(normal_price)}
            </p>
          </div>
          <p className="text-m-regular mt-0.5">{description}</p>
        </div>
        <div />
      </aside>
    </article>
  )
}

export default MoleculesCardMenuDetail
