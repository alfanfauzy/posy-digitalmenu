import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { BottomSheet, Button } from 'posy-fnb-ds'
import ImageMenu from '@/molecules/image/menu'
import { Product } from '@/types/product'
import { toRupiah } from 'utils/common'
import { useAppSelector } from 'store/hooks'

interface MoleculesCardMenuListProps {
  product: Product
}

const MoleculesCardMenuList = ({ product }: MoleculesCardMenuListProps) => {
  const router = useRouter()
  const { basket } = useAppSelector((state) => state.basket)
  const selected = basket.filter((el) => el.product.product_uuid === product.product_uuid)

  const [openBottomBar, setOpenBottomBar] = useState(false)

  const calculate = useMemo(
    () => selected.length > 0 && selected[0].product.price_after_discount * selected[0].quantity,
    [selected],
  )

  const renderPrice = (
    available: boolean,
    price_after_discount: number,
    price_before_discount: number,
  ) => {
    if (!available) return 'Sold out'
    if (price_after_discount > 0) return toRupiah(price_after_discount)
    return toRupiah(price_before_discount)
  }

  const handleClick = () => {
    if (selected.length > 0) {
      setOpenBottomBar(true)
    } else {
      router.push('/order/23')
    }
  }

  const handleClickExisting = () => {
    router.push('/order/23')
  }

  return (
    <>
      <div className="relative">
        {!product?.is_available && (
          <div className="bg-neutral-10 z-10 bg-opacity-40 absolute h-full w-full flex justify-center items-center pb-28" />
        )}
        <aside
          role="presentation"
          onClick={handleClick}
          className="w-full flex gap-4 hover:bg-neutral-20 active:animate-pulse transition duration-300 ease-in-out p-4"
        >
          <div className="flex-1">
            <p
              className={`text-m-semibold line-clamp-3 ${
                selected.length > 0 ? 'text-red-accent' : ''
              }`}
            >
              {product.product_name}
            </p>
            <p className="text-m-regular mt-1 line-clamp-3">{product.product_description}</p>
            <p className="text-l-medium mt-2">
              {renderPrice(
                product.is_available,
                product.price_after_discount,
                product.price_before_discount,
              )}
            </p>
          </div>

          <div className="flex flex-col items-end">
            <ImageMenu image={{ url: '/menu.png', alt: 'menu' }} size="s" className="mb-4" />
            <Button variant="secondary" size="xs">
              {`${selected.length ? `${selected[0]?.quantity} item` : 'Add'}`}
            </Button>
          </div>
        </aside>
      </div>
      {selected.length > 0 && (
        <BottomSheet
          alignTitle="start"
          title={product.product_name}
          open={openBottomBar}
          onClose={() => setOpenBottomBar(false)}
        >
          <div className="w-full mt-4 overflow-auto max-h-[560px] border-t">
            <aside
              role="presentation"
              onClick={handleClickExisting}
              className="flex gap-3 py-4 justify-between items-center"
            >
              <div>
                <p className="text-m-semibold">{product.product_name}</p>
                <p className=" text-m-medium">spicy level 1</p>
              </div>

              <div className="rounded-3xl border w-fit py-2 px-4 text-l-semibold">{`x${selected[0].quantity}`}</div>

              <div>
                <p className="text-m-regular">{toRupiah(calculate || 0)}</p>
              </div>
            </aside>
            <aside className="pb-2">
              <Button size="m" fullWidth>
                Make Another
              </Button>
            </aside>
          </div>
        </BottomSheet>
      )}
    </>
  )
}

export default MoleculesCardMenuList
