/**
 *
 * ContainerPaymentCompleted
 *
 */

import PagesPaymentCompleted from '@/pages/payment/completed';
import {GetPaymentCompoletedResponse} from 'core/data/payment/types';
import React from 'react';

type ContainerPaymentCompletedProps = {
	paymentCompleted: GetPaymentCompoletedResponse | undefined;
};

const ContainerPaymentCompleted = ({paymentCompleted}: ContainerPaymentCompletedProps) => (
	<PagesPaymentCompleted paymentCompleted={paymentCompleted} />
);

export default ContainerPaymentCompleted;
