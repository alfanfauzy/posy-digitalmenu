import {GetPaymentCompoletedResponse} from 'core/data/payment/types';
import Image from 'next/image';
import React from 'react';
import {toRupiah} from 'utils/common';

type PagesPaymentCompletedProps = {
	paymentCompleted: GetPaymentCompoletedResponse | undefined;
};

const PagesPaymentCompleted = ({paymentCompleted}: PagesPaymentCompletedProps) => {
	return (
		<main className="container mx-auto min-h-screen pt-4 pb-40 shadow-md">
			<section className="px-4">
				<div className="mb-4 flex items-center gap-4">
					<p className="text-xxl-semibold">Payment Summary</p>
				</div>
				<div className="border-t border-neutral-30" />
			</section>

			{paymentCompleted && (
				<>
					<div className="mx-auto max-w-md">
						<div className="flex items-center justify-center pt-3">
							<Image src="/check_completed.svg" priority alt="logo" width={100} height={100} />
						</div>
					</div>

					<div className="divide-y divide-neutral-30">
						<div className="mx-auto max-w-md pb-8">
							<p className="text-primary-main pt-8 text-center text-xxl-semibold">
								Payment Completed
							</p>
							<p className="text-center text-l-regular text-neutral-70">
								ID: {paymentCompleted.transaction_code}
							</p>
						</div>
						<div className="flex flex-col pb-6" />
					</div>

					<div className="divide-y divide-neutral-30">
						<div className="mx-auto max-w-md pb-1">
							<div className="flex justify-between pb-2 pt-2">
								<p className="text-primary-main text-l-semibold">Total amount</p>
								<p className="text-l-semibold text-primary-main">
									{toRupiah(paymentCompleted.total_amount)}
								</p>
							</div>
							<div className="flex justify-between pb-2">
								<p className="text-primary-main text-m-regular">Payment type</p>
								<p className="text-primary-main text-m-semibold">
									{paymentCompleted.payment_method}
								</p>
							</div>
							<div className="flex justify-between pb-2">
								<p className="text-primary-main text-m-regular">Provider</p>
								<p className="text-m-semibold text-primary-main">-</p>
							</div>
						</div>
						<div className="pb- flex flex-col" />
					</div>

					<div className="divide-y divide-neutral-30 pb-4">
						<div className="mx-auto max-w-md pb-1">
							<div className="flex justify-between pb-2 pt-2">
								<p className="text-primary-main text-l-semibold">Amount paid</p>
								<p className="text-l-semibold text-primary-main">
									{toRupiah(paymentCompleted.paid_amount)}
								</p>
							</div>
							<div className="flex justify-between pb-4">
								<p className="text-primary-main text-l-semibold">Change</p>
								<p className="text-l-semibold text-primary-main">
									{toRupiah(paymentCompleted.change_amount)}
								</p>
							</div>
						</div>
						<div className="pb- flex flex-col" />
					</div>
					<div className="mx-auto mt-2 max-w-md pb-5 text-center">
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
