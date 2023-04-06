/**
 *
 * ContainerPaymentSummary
 *
 */

import React from 'react'
import { GetPaymentSummaryResponse } from 'core/data/payment/types'
import PagesWaitingPayment from '@/pages/payment/waiting'

type ContainerWaitingPaymentProps = {
  paymentSummary: GetPaymentSummaryResponse | undefined
}

const ContainerWaitingPayment = ({ paymentSummary }: ContainerWaitingPaymentProps) => (
  <PagesWaitingPayment paymentSummary={paymentSummary} />
)

export default ContainerWaitingPayment
