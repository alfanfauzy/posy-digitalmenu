import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import PaymentSummaryMolecules from '@/molecules/payment/summary';
import {useQuery} from '@tanstack/react-query';
import {GetPaymentCompleted} from 'core/data/payment/sources/GetPaymentCompletedQuery';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Button} from 'posy-fnb-core';
import React from 'react';
import {generateTransactionCode} from 'utils/UtilsGenerateTransactionCode';

const TimeOutPaymentCompleted = require('public/timeout.svg');

const PagesTimeoutPayment = () => {
	const router = useRouter();
	const {transaction_uuid} = router.query;

	const {data: paymentCompleted} = useQuery(['payment/completed'], async () => {
		const response = await GetPaymentCompleted(transaction_uuid as string);
		const dataPaymentCompleted = await response.data;
		return dataPaymentCompleted;
	});

	return (
		<main className="mx-auto min-h-screen pt-4 px-5 shadow-md">
			<MoleculesHeaderNavigation text="Payment Summary" isWithIcon={false} />

			{paymentCompleted && (
				<section>
					<div>
						<div className="flex items-center justify-center pt-3">
							<Image src={TimeOutPaymentCompleted} priority alt="payment timeout" />
						</div>
					</div>

					<div className="divide-y divide-neutral-30">
						<div className="mx-auto pb-8">
							<p className="text-primary-main pt-8 text-center text-xxl-semibold">
								Session Timeout
							</p>
							<p className="text-center text-l-regular text-neutral-70">
								ID: {generateTransactionCode(paymentCompleted.transaction_code)}
							</p>
						</div>
						<div className="flex flex-col pb-6" />
					</div>

					<PaymentSummaryMolecules paymentCompleted={paymentCompleted} />

					<div className="mx-auto mt-2 pb-5">
						<p className="text-primary-main text-l-bold">Sorry, your payment time is expired</p>
						<p className="text-primary-main mt-2 mb-6 text-l-regular">
							Please try again or contact our staff for manual payment.
						</p>
						<Button
							fullWidth
							onClick={() => {
								router.push(`/payment/summary/${transaction_uuid}`);
							}}
						>
							Back to Payment
						</Button>
					</div>
				</section>
			)}
		</main>
	);
};

export default PagesTimeoutPayment;
