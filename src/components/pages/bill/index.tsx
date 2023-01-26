/**
 *
 * PagesBill
 *
 */

import { useRouter } from 'next/router'
import { Button } from 'posy-fnb-ds'
import React, { useMemo } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useAppSelector } from 'store/hooks'
import { calculateTotal, toRupiah } from 'utils/common'
import User from 'src/assets/icons/user'

const PagesBill: React.FC = () => {
  const router = useRouter()
  const { basket } = useAppSelector((state) => state.basket)

  const subtotal = useMemo(() => calculateTotal(basket), [basket])

  const goBack = () => router.push('/menu')

  return (
    <main className="container mx-auto min-h-screen pt-4 pb-40 shadow-md">
      {/* molecules */}
      <section className="px-4">
        <div className="mb-4 flex items-center gap-4">
          <IoIosArrowBack onClick={goBack} size={24} className="cursor-pointer" />
          <p className="text-xxl-semibold">Bill Summary</p>
        </div>
        <div className="border-t border-neutral-30" />
      </section>

      {/* molecules */}
      <section className="mt-4 flex items-center justify-between px-4">
        <div className="flex flex-col items-start">
          <p className="text-m-medium text-neutral-60">Trx ID</p>
          <p className="text-m-semibold mt-0.5 text-neutral-80">2134</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-m-medium text-neutral-60">Table</p>
          <p className="text-m-semibold mt-0.5 text-neutral-80">4</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-m-medium text-neutral-60">Total Pax</p>
          <div className="flex items-center gap-1.5">
            <p className="text-m-semibold mt-0.5 text-neutral-80">2</p>
            <User />
          </div>
        </div>
      </section>

      {/* organims */}
      <div className="mt-4 flex items-center justify-between bg-neutral-30 px-4 py-2">
        <p className="text-l-semibold">Order 1</p>
        <p className="text-l-regular">Unpaid</p>
      </div>
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

            {item.notes && (
              <div id="notes" className="mt-2">
                <p className="text-s-regular text-neutral-70">
                  <span className="text-s-semibold">Notes:</span> {item.notes || '-'}
                </p>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between">
              <p className="text-m-semibold">Status</p>
              <p className="text-m-semibold text-[#003BD4]">Order Processed</p>
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
        <Button fullWidth>Payment</Button>
      </section>
    </main>
  )
}

export default PagesBill
