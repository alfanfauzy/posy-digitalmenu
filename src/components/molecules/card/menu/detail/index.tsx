import React from 'react'
import ImageMenu from '@/molecules/image/menu'

const MoleculesCardMenuDetail = () => (
  <>
    <ImageMenu
      image={{ url: '/menu.png', alt: 'menu' }}
      timeLabel="in 15 min"
      label="Discount"
      size="l"
      isRecommended
    />
    <section className="mt-4 divide-y">
      <div className="pb-4">
        <p className="text-xxl-bold">Fried Cap Cay</p>
        <div className="flex items-center gap-2">
          <p className="text-xxl-regular">30.000</p>
          <p className="text-xxl-regular line-through text-neutral-70">50.000</p>
        </div>
        <p className="text-m-regular mt-0.5">
          Served mixed with meats such as chicken, liver, beef, shrimp, and slices of fish
          meatballs.
        </p>
      </div>
      <div />
    </section>
  </>
)

export default MoleculesCardMenuDetail
