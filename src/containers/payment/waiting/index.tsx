/**
 *
 * ContainerPaymentSummary
 *
 */

import PagesWaitingPayment from '@/pages/payment/waiting';
import {GetPaymentSummaryResponse} from 'core/data/payment/types';
import React from 'react';

type ContainerWaitingPaymentProps = {
	paymentSummary: GetPaymentSummaryResponse | undefined;
};

const ContainerWaitingPayment = ({paymentSummary}: ContainerWaitingPaymentProps) => (
	<PagesWaitingPayment paymentSummary={paymentSummary} />
);

export default ContainerWaitingPayment;
