import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { BottomSheet, Button } from 'posy-fnb-ds'
import ImageMenu from '@/molecules/image/menu'
import { Product } from '@/types/product'
import { toRupiah } from 'utils/common'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { onChangeQuantity } from 'store/slices/menu'
import { BasketItem } from 'store/slices/basket'
import { calculateAddOn } from '@/molecules/section/add-to-basket'
import { calculateQuantity } from '@/atoms/button/float'

const calculateTotalProduct = (el: BasketItem) =>
  (calculateAddOn(el.addOnVariant) + el.product.price_after_discount) * el.quantity

interface MoleculesCardMenuListProps {
  product: Product
}

const MoleculesCardMenuList = ({ product }: MoleculesCardMenuListProps) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { basket } = useAppSelector((state) => state.basket)
  const selected = basket.filter((el) => el.product.product_uuid === product.product_uuid)

  const quantity = useMemo(() => calculateQuantity(selected), [selected])

  const [openBottomBar, setOpenBottomBar] = useState(false)

  const renderPrice = (
    available: boolean,
    price_after_discount: number,
    price_before_discount: number,
  ) => {
    if (!available) return 'Sold out'
    if (price_after_discount > 0) return toRupiah(price_after_discount)
    return toRupiah(price_before_discount)
  }

  const handleMakesNewOrder = () => {
    setTimeout(() => {
      router.push('/menu/23')
    }, 500)
    setOpenBottomBar(false)
    dispatch(onChangeQuantity({ operator: 'plus', value: 1 }))
  }

  const handleClick = () => {
    if (selected.length > 0) {
      setOpenBottomBar(true)
    } else {
      handleMakesNewOrder()
    }
  }

  const handleClickExisting = (counter: number) => {
    setTimeout(() => {
      router.push({
        pathname: '/menu/23',
        query: { counter },
      })
    }, 500)
    setOpenBottomBar(false)
  }

  return (
    <>
      <div className="relative">
        {!product?.is_available && (
          <div className="absolute z-10 flex h-full w-full items-center justify-center bg-neutral-10 bg-opacity-40 pb-28" />
        )}
        <aside
          role="presentation"
          onClick={handleClick}
          className="flex w-full gap-4 p-4 transition duration-300 ease-in-out hover:bg-neutral-20 active:animate-pulse"
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
              {`${selected.length > 0 ? `${quantity} item${quantity > 1 ? 's' : ''}` : 'Add'}`}
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
          <div className="mt-4 max-h-[560px] w-full overflow-auto border-t">
            {selected.map((el) => (
              <aside
                key={el.product.product_uuid}
                role="presentation"
                onClick={() => handleClickExisting(el.counter)}
                className="flex items-center justify-between gap-3 py-4"
              >
                <div>
                  <p className="text-m-semibold">{el.product.product_name}</p>
                  {el.addOnVariant.length > 0 && (
                    <p className=" text-m-medium">{`${el.addOnVariant[0].addOnName} : ${el.addOnVariant[0].variant_name}`}</p>
                  )}
                </div>

                <div className="text-l-semibold w-fit rounded-3xl border py-2 px-4">{`x${el.quantity}`}</div>

                <div>
                  <p className="text-m-regular">{toRupiah(calculateTotalProduct(el) || 0)}</p>
                </div>
              </aside>
            ))}
            <aside className="pb-2">
              <Button size="m" fullWidth onClick={handleMakesNewOrder}>
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
