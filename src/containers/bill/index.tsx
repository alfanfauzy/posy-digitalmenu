/**
 *
 * ContainerBill
 *
 */

import React from 'react'
import PagesBill from '@/pages/bill'
import { GetOrderResponse } from 'core/data/order/types'
import { GetTransactionDetailResponse } from 'core/data/transaction/types'

type ContainerBillProps = {
  orderDetail: Array<GetOrderResponse> | undefined
  isLoadingOrderDetail: boolean
  transactionDetail: GetTransactionDetailResponse | undefined
  isLoadingTransactionDetail: boolean
}

const ContainerBill = ({
  orderDetail,
  isLoadingOrderDetail,
  transactionDetail,
  isLoadingTransactionDetail,
}: ContainerBillProps) => (
  <PagesBill
    orderDetail={orderDetail}
    isLoadingOrderDetail={isLoadingOrderDetail}
    transactionDetail={transactionDetail}
    isLoadingTransactionDetail={isLoadingTransactionDetail}
  />
)

export default ContainerBill
