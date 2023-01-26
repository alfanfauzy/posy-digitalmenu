import React from 'react'
import ImageMenu from '@/molecules/image/menu'
import { toRupiah } from 'utils/common'
import { Product } from '@/types/product'

interface MoleculesCardMenuDetailProps {
  product: Product
}

const MoleculesCardMenuDetail = ({ product }: MoleculesCardMenuDetailProps) => {
  const {
    product_name,
    product_description,
    price_after_discount,
    price_before_discount,
    is_favourite,
    cooking_duration,
    is_discount,
    // product_thumbnail,
  } = product

  return (
    <article>
      <ImageMenu
        image={{ url: '/menu.png', alt: product_name }}
        timeLabel={`in ${cooking_duration} min`}
        label={is_discount ? 'Discount' : ''}
        size="l"
        isRecommended={!!is_favourite}
      />
      <aside className="mt-4 divide-y">
        <div className="pb-4">
          <p className="text-xxl-bold">{product_name}</p>
          <div className="flex items-center gap-2">
            <p className="text-xxl-regular">{toRupiah(price_after_discount)}</p>
            <p className="text-xxl-regular text-neutral-70 line-through">
              {toRupiah(price_before_discount)}
            </p>
          </div>
          <p className="text-m-regular mt-0.5">{product_description}</p>
        </div>
        <div />
      </aside>
    </article>
  )
}

export default MoleculesCardMenuDetail
