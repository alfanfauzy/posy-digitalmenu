/**
 *
 * ContainerPaymentSummary
 *
 */

import PagesPaymentSummary from '@/pages/payment/summary';
import {GetPaymentSummaryResponse} from 'core/data/payment/types';
import React from 'react';

type ContainerPaymentSummaryProps = {
	paymentSummary: GetPaymentSummaryResponse | undefined;
};

const ContainerPaymentSummary = ({paymentSummary}: ContainerPaymentSummaryProps) => (
	<PagesPaymentSummary paymentSummary={paymentSummary} />
);

export default ContainerPaymentSummary;
