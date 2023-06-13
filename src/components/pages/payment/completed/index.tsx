import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import PaymentSummaryMolecules from '@/molecules/payment/summary';
import {GetPaymentCompoletedResponse} from 'core/data/payment/types';
import Image from 'next/image';
import React from 'react';
import {generateTransactionCode} from 'utils/UtilsGenerateTransactionCode';

const ImagePaymentCompleted = require('public/check_completed.svg');

type PagesPaymentCompletedProps = {
	paymentCompleted: GetPaymentCompoletedResponse | undefined;
};

const PagesPaymentCompleted = ({paymentCompleted}: PagesPaymentCompletedProps) => {
	return (
		<main className="mx-auto min-h-screen pt-4 px-5 shadow-md">
			<MoleculesHeaderNavigation text="Payment Summary" isWithIcon={false} />

			{paymentCompleted && (
				<>
					<div>
						<div className="flex items-center justify-center pt-3">
							<Image src={ImagePaymentCompleted} priority alt="payment completed" />
						</div>
					</div>

					<div className="divide-y divide-neutral-30">
						<div className="mx-auto pb-8">
							<p className="text-primary-main pt-8 text-center text-xxl-semibold">
								Payment Completed
							</p>
							<p className="text-center text-l-regular text-neutral-70">
								ID: {generateTransactionCode(paymentCompleted.transaction_code)}
							</p>
						</div>
						<div className="flex flex-col pb-6" />
					</div>

					<PaymentSummaryMolecules paymentCompleted={paymentCompleted} />

					<div className="mx-auto mt-2 pb-5 text-center">
						<p className="text-primary-main text-l-bold">Thank you for your payment!</p>
						<p className="text-primary-main pb-10 text-l-regular">
							Please contact our staff to get a new QR if you want to order again.
						</p>
					</div>
				</>
			)}
		</main>
	);
};

export default PagesPaymentCompleted;
