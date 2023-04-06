/**
 *
 * ContainerPaymentSummary
 *
 */

import React from 'react'
import PagesPaymentSummary from '@/pages/payment/summary'
import { GetPaymentSummaryResponse } from 'core/data/payment/types'

type ContainerPaymentSummaryProps = {
  paymentSummary: GetPaymentSummaryResponse | undefined
}

const ContainerPaymentSummary = ({ paymentSummary }: ContainerPaymentSummaryProps) => (
  <PagesPaymentSummary paymentSummary={paymentSummary} />
)

export default ContainerPaymentSummary
