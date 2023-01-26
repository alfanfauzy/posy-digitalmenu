/**
 *
 * PagesBasket
 *
 */

import { useRouter } from 'next/router'
import { Button, IconButton, Modal } from 'posy-fnb-ds'
import React, { useCallback, useMemo, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { IoIosArrowBack } from 'react-icons/io'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { onChangeQuantity } from 'store/slices/basket'
import { calculateTotal, toRupiah } from 'utils/common'
import PencilEdit from 'src/assets/icons/pencilEdit'
import Info from 'src/assets/icons/info'

const PagesBasket: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { basket } = useAppSelector((state) => state.basket)
  const [open, setOpen] = useState(false)

  const subtotal = useMemo(() => calculateTotal(basket), [basket])

  const goBack = () => router.push('/menu')

  const handleIncreamentQuantity = useCallback(
    (orderId: number) => dispatch(onChangeQuantity({ operator: 'plus', value: 1, orderId })),
    [dispatch],
  )

  const handleDecreamentQuantity = useCallback(
    (orderId: number) => dispatch(onChangeQuantity({ operator: 'minus', value: 1, orderId })),
    [dispatch],
  )

  const handleConfirm = () => {
    setOpen(false)
    router.push('/bill')
  }
  return (
    <main className="container mx-auto min-h-screen pt-4 pb-40 shadow-md">
      {/* molecules */}
      <section className="px-4">
        <div className="mb-4 flex items-center gap-4">
          <IoIosArrowBack onClick={goBack} size={24} className="cursor-pointer" />
          <p className="text-xxl-semibold">Your Basket</p>
        </div>
        <div className="border-t border-neutral-30" />
      </section>

      {/* organims */}
      <section className="px-4 pt-4">
        {basket.map((item) => (
          <aside key={item.counter} className="pb-4">
            <div id="product-info" className="flex justify-between">
              <p className="text-l-regular flex-1">{item.product.product_name}</p>
              <div className="flex flex-col items-end">
                <p className="text-l-regular">{toRupiah(item.product.price_after_discount)}</p>
                <p className="text-s-regular text-neutral-60 line-through">
                  {toRupiah(item.product.price_before_discount)}
                </p>
              </div>
            </div>
            <div id="addon" className="mt-2 flex flex-col gap-1">
              {item.addOnVariant.map((addon) => (
                <div key={addon.variant_uuid} className="flex items-start justify-between">
                  <p className="text-s-regular w-3/4 line-clamp-2">{`- ${addon.variant_name}`}</p>
                  <p className="text-s-regular">
                    {addon.price === 0 ? 'Free' : toRupiah(addon.price)}
                  </p>
                </div>
              ))}
            </div>

            <div id="notes" className="mt-2">
              <p className="text-s-regular text-neutral-70">
                <span className="text-s-semibold">Notes:</span> {item.notes || '-'}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <PencilEdit />
                <p className="text-s-semibold">Notes</p>
              </div>

              <div className="flex gap-3">
                <IconButton
                  disabled={item.quantity === 0}
                  onClick={() => handleDecreamentQuantity(item.counter)}
                >
                  <BiMinus />
                </IconButton>
                <div>{item.quantity}</div>
                <IconButton onClick={() => handleIncreamentQuantity(item.counter)}>
                  <BiPlus />
                </IconButton>
              </div>
            </div>
            <div className="mt-4 border-t border-neutral-30" />
          </aside>
        ))}
      </section>

      <section className="mt-2 px-4">
        <Button variant="secondary" size="m" fullWidth onClick={goBack}>
          + Add more order
        </Button>

        <div className="mt-6 flex flex-col gap-2">
          <p className="text-m-semibold">Payment Details</p>
          <div className="text-m-medium flex items-center justify-between">
            <p>Subtotal</p>
            <p>{toRupiah(subtotal)}</p>
          </div>
          <div className="text-m-medium flex items-center justify-between">
            <p>Discount</p>
            <p>{toRupiah(0)}</p>
          </div>
          <div className="text-m-medium flex items-center justify-between">
            <p>Service</p>
            <p>{toRupiah(0)}</p>
          </div>
          <div className="text-m-medium flex items-center justify-between">
            <p>Tax 10%</p>
            <p>{toRupiah(0)}</p>
          </div>
          <div className="text-l-semibold flex items-center justify-between">
            <p>Total</p>
            <p>{toRupiah(subtotal)}</p>
          </div>
        </div>
      </section>

      {/* molecules */}
      <section
        style={{
          boxShadow: '0px -6px 24px rgb(0 0 0 / 10%)',
        }}
        className="fixed bottom-0 w-full max-w-[576px] rounded-t-2xl bg-neutral-10 px-4 pb-20 pt-6"
      >
        <Button onClick={() => setOpen(true)} fullWidth>
          Submit Order
        </Button>
      </section>

      {/* molecules */}
      <Modal open={open} handleClose={() => setOpen(false)}>
        <section className="flex flex-col items-center justify-center pt-2">
          <Info />
          <div className="mt-4 px-4">
            <p className="text-l-semibold text-center">Submitted order cannot be cancelled</p>
          </div>
          <p className="text-m-regular mt-[10px] text-center">Are you sure you want to proceed?</p>
          <div className="mt-8 flex gap-2">
            <Button variant="secondary" size="m" onClick={() => setOpen(false)}>
              No, check again
            </Button>
            <Button variant="primary" size="m" onClick={handleConfirm}>
              Yes, confirm
            </Button>
          </div>
        </section>
      </Modal>
    </main>
  )
}

export default PagesBasket
