/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * PagesMenuDetail
 *
 */

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Loading } from 'posy-fnb-core'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { onEditOrder, onLeaveOrderPage } from 'store/slices/menu'
import SectionBottomBar from '@/organisms/bottom-bar/item-quantity'
import FormOrder from '@/organisms/form/order'
import CardMenuDetail from '@/molecules/card/menu/detail'

const PagesMenuDetail: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const basket = useAppSelector((state) => state.basket)
  const productDetail = useAppSelector((state) => state.product.detail)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const exitingFunction = () => dispatch(onLeaveOrderPage())

    router.events.on('routeChangeStart', exitingFunction)

    return () => {
      router.events.off('routeChangeStart', exitingFunction)
    }
  }, [])

  useEffect(() => {
    const { counter } = router.query
    if (counter) {
      const filteredBasket = basket.basket.find((el) => el.counter.toString() === counter)
      if (filteredBasket) {
        setLoading(true)
        dispatch(
          onEditOrder({
            addOnVariant: filteredBasket.addOnVariant,
            quantity: filteredBasket.quantity,
            notes: filteredBasket.notes,
          }),
        )
        setTimeout(() => {
          setLoading(false)
        }, 500)
      }
    }
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center overflow-hidden">
        <Loading size={60} />
      </div>
    )
  }

  return (
    <main className="p-4 shadow-md">
      <CardMenuDetail product={productDetail} />
      <FormOrder add_on={productDetail.addons} />
      <SectionBottomBar product={productDetail} />
    </main>
  )
}

export default PagesMenuDetail
