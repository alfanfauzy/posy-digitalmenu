/**
 *
 * PagesBasket
 *
 */

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Button } from 'posy-fnb-core'
import React, { useMemo, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useAppSelector } from 'store/hooks'
import {
  calculateOrder,
  calculateOrderBeforeDiscount,
  calculateTotal,
  toRupiah,
} from 'utils/common'
import PencilEdit from 'src/assets/icons/pencilEdit'
import Info from 'src/assets/icons/info'

const Modal = dynamic(() => import('posy-fnb-core').then((el) => el.Modal), {
  loading: () => <div />,
})

const PagesBasket: React.FC = () => {
  const router = useRouter()
  const { basket } = useAppSelector((state) => state.basket)
  const [open, setOpen] = useState(false)
  const subtotal = useMemo(() => calculateTotal(basket), [basket])

  const goBack = () => router.push('/menu')

  const handleConfirm = () => {
    setOpen(false)
    router.push('/bill')
  }

  const editOrder = (productId: string, orderId: string) => {
    setTimeout(() => {
      router.push({
        pathname: `/menu/${productId}`,
        query: { counter: orderId },
      })
    }, 100)
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

      {basket.length === 0 && (
        <div className="mt-10 flex justify-center text-m-semibold">Your basket is still empty!</div>
      )}

      {/* molecules */}
      {basket.length > 0 && (
        <>
          {/* organims */}
          <section className="px-4 pt-4">
            {basket.map((item) => (
              <aside key={item.counter} className="pb-4">
                <div id="product-info" className="flex justify-between">
                  <p className="mr-2 text-l-regular">x{item.quantity}</p>
                  <p className="flex-1 text-l-regular">{item.product.product_name}</p>
                  <div className="flex flex-col items-end">
                    <p className="text-l-regular">{toRupiah(calculateOrder(item) || 0)}</p>
                    <p className="text-s-regular text-neutral-60 line-through">
                      {toRupiah(calculateOrderBeforeDiscount(item) || 0)}
                    </p>
                  </div>
                </div>
                <div id="addon" className="mt-2 ml-6 flex flex-col gap-1">
                  {item.addOnVariant.map((addon) => (
                    <div key={addon.variant_uuid} className="flex items-start justify-between">
                      <p className="w-3/4 text-s-regular text-neutral-90 line-clamp-1">{`${addon.addOnName} ${addon.variant_name}`}</p>
                    </div>
                  ))}
                </div>

                <div id="notes" className="ml-6 mt-0.5">
                  <p className="text-s-regular text-neutral-70">
                    <span className="text-s-semibold">Notes:</span> {item.notes || '-'}
                  </p>
                </div>

                <div className="mt-4 ml-6 flex items-center justify-between">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => editOrder(item.product.product_uuid, item.counter.toString())}
                    onKeyDown={() => editOrder(item.product.product_uuid, item.counter.toString())}
                    className="flex items-center gap-1.5"
                  >
                    <PencilEdit />
                    <p className="text-s-semibold">Edit Order</p>
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
              <div className="flex items-center justify-between text-m-medium">
                <p>Subtotal</p>
                <p>{toRupiah(subtotal)}</p>
              </div>
              <div className="flex items-center justify-between text-m-medium">
                <p>Discount</p>
                <p>{toRupiah(0)}</p>
              </div>
              <div className="flex items-center justify-between text-m-medium">
                <p>Service</p>
                <p>{toRupiah(0)}</p>
              </div>
              <div className="flex items-center justify-between text-m-medium">
                <p>Tax 10%</p>
                <p>{toRupiah(0)}</p>
              </div>
              <div className="flex items-center justify-between text-l-semibold">
                <p>Total</p>
                <p>{toRupiah(subtotal)}</p>
              </div>
            </div>
          </section>

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
        </>
      )}

      {/* molecules */}
      <Modal open={open} handleClose={() => setOpen(false)}>
        <section className="flex flex-col items-center justify-center pt-2">
          <Info />
          <div className="mt-4 px-4">
            <p className="text-center text-l-semibold">Submitted order cannot be cancelled</p>
          </div>
          <p className="mt-[10px] text-center text-m-regular">Are you sure you want to proceed?</p>
          <div className="mt-8 flex gap-2">
            <Button variant="secondary" size="m" onClick={() => setOpen(false)}>
              No
            </Button>
            <Button variant="primary" size="m" onClick={handleConfirm}>
              Yes
            </Button>
          </div>
        </section>
      </Modal>
    </main>
  )
}

export default PagesBasket
