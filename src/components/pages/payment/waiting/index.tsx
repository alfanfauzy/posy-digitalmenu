import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { GetPaymentSummaryResponse } from 'core/data/payment/types'
import { toRupiah } from 'utils/common'

type PagesPaymentSummaryProps = {
  paymentSummary: GetPaymentSummaryResponse | undefined
}

const PagesWaitingPayment = ({ paymentSummary }: PagesPaymentSummaryProps) => {
  const router = useRouter()
  const { transaction_uuid } = router.query

  const goBack = () => router.push(`/menu/${transaction_uuid}`)

  return (
    <main className="container mx-auto min-h-screen pt-4 pb-40 shadow-md">
      <section className="px-4">
        <div className="mb-4 flex items-center gap-4">
          <IoIosArrowBack onClick={goBack} size={24} className="cursor-pointer" />
          <p className="text-xxl-semibold">Bill Summary</p>
        </div>
        <div className="border-t border-neutral-30" />
      </section>

      {paymentSummary && (
        <>
          <div className="mx-auto mt-2 max-w-md pb-5">
            <p className="text-center text-xxl-semibold text-neutral-100">
              Thank you for your order!
            </p>
            <p className="pt-3 text-center text-m-regular text-neutral-70">Your transacion ID</p>
            <p className="mt-1 mb-4 text-center text-xl-semibold text-secondary-main">
              {transaction_uuid}
            </p>
            <Image
              src="/waiting_payment.svg"
              priority
              alt="logo"
              width={400}
              height={400}
              className="m-auto"
            />
          </div>
          <div className="pb divide-y divide-gray-300/50">
            <div className="mx-auto max-w-md pb-5 pt-5">
              <p className="text-left text-l-regular text-neutral-100">
                Please go to the cashier to pay for your order. Our staff will be happy to assist
                you.
              </p>
            </div>
            <div className="flex flex-col pb-8" />
          </div>

          <section className="px-4 pt-4">
            <p className="text-left text-xl-semibold text-neutral-100">Payment Details</p>
            <div className="flex justify-between pb-2 pt-2">
              <p className="text-m-medium text-neutral-100">Subtotal</p>
              <p className="text-l-semibold text-neutral-100">
                {toRupiah(paymentSummary.subtotal_price_gross)}
              </p>
            </div>
            <div className="flex justify-between pb-2">
              <p className="text-m-medium text-neutral-100">Discount</p>
              <p className="text-l-semibold text-neutral-100">
                -{toRupiah(paymentSummary.discount_product_price)}
              </p>
            </div>
            <div className="flex justify-between pb-2">
              <p className="text-m-medium text-neutral-100">
                Service{' '}
                {paymentSummary.tax_and_charge.is_service_charge &&
                  `${paymentSummary.tax_and_charge.service_charge_percentage}%`}
              </p>
              <p className="text-l-medium text-neutral-100">
                {toRupiah(paymentSummary.tax_and_charge.service_charge_price)}
              </p>
            </div>
            <div className="flex justify-between pb-2">
              <p className="text-m-medium text-neutral-100">
                PB 1{' '}
                {paymentSummary.tax_and_charge.is_tax &&
                  `${paymentSummary.tax_and_charge.tax_percentage}%`}
              </p>
              <p className="text-l-medium text-neutral-100">
                {toRupiah(paymentSummary.tax_and_charge.tax_price)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-l-semibold text-neutral-100">TOTAL</p>
              <p className="text-l-semibold text-neutral-100">
                {toRupiah(paymentSummary.payment_price)}
              </p>
            </div>

            <div className="divide-y divide-gray-300/50">
              <div className="flex flex-col pb-4" />
              <div className="flex flex-col pb-4" />
            </div>
          </section>
        </>
      )}

      <div className="flex flex-col p-4">
        <button
          type="button"
          onClick={() => router.push(`/payment/waiting/${transaction_uuid}`)}
          className="w-full rounded-[24px] border border-black bg-white px-4 py-2 text-l-semibold text-neutral-100"
        >
          Check Status
        </button>
      </div>
    </main>
  )
}

export default PagesWaitingPayment
