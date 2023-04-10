import {GetPaymentSummaryResponse} from 'core/data/payment/types';
import {useRouter} from 'next/router';
import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import User from 'src/assets/icons/user';
import {useAppSelector} from 'store/hooks';
import {toRupiah} from 'utils/common';

type PagesPaymentSummaryProps = {
	paymentSummary: GetPaymentSummaryResponse | undefined;
};

const PagesPaymentSummary = ({paymentSummary}: PagesPaymentSummaryProps) => {
	const router = useRouter();
	const {transaction_uuid} = useAppSelector(state => state.transaction);

	const goBack = () => router.push(`/menu/${transaction_uuid}`);

	return (
		<main className="container mx-auto min-h-screen pt-4 pb-40 shadow-md">
			<section className="px-4">
				<div className="mb-4 flex items-center gap-4">
					<IoIosArrowBack onClick={goBack} size={24} className="cursor-pointer" />
					<p className="text-xxl-semibold">Payment Summary</p>
				</div>
				<div className="border-t border-neutral-30" />
			</section>

			{paymentSummary && (
				<>
					<section key={transaction_uuid} className="mt-4 flex items-center justify-between px-4">
						<div className="flex flex-col items-start">
							<p className="text-m-medium text-neutral-60">Trx ID</p>
							<p className="mt-0.5 text-m-semibold text-neutral-80">{transaction_uuid}</p>
						</div>
						<div className="flex flex-col items-center">
							<p className="text-m-medium text-neutral-60">Table</p>
							<p className="mt-0.5 text-m-semibold text-neutral-80">4</p>
						</div>
						<div className="flex flex-col items-end">
							<p className="text-m-medium text-neutral-60">Total Pax</p>
							<div className="flex items-center gap-1.5">
								<p className="mt-0.5 text-m-semibold text-neutral-80">2</p>
								<User />
							</div>
						</div>
					</section>

					<section className="px-4 pt-4">
						<p className="text-left text-xl-semibold text-neutral-100">Payment Details</p>
						<div className="flex justify-between pb-2 pt-2">
							<p className="text-m-medium text-neutral-100">Subtotal</p>
							<p className="text-l-semibold text-neutral-100">
								{toRupiah(paymentSummary.subtotal_price_gross)}
							</p>
						</div>
						<div className="flex justify-between pb-2">
							<p className="text-m-medium text-neutral-100">Discount</p>
							<p className="text-l-semibold text-neutral-100">
								-{toRupiah(paymentSummary.discount_product_price)}
							</p>
						</div>
						<div className="flex justify-between pb-2">
							<p className="text-m-medium text-neutral-100">
								Service{' '}
								{paymentSummary.tax_and_charge.is_service_charge &&
									`${paymentSummary.tax_and_charge.service_charge_percentage}%`}
							</p>
							<p className="text-l-medium text-neutral-100">
								{toRupiah(paymentSummary.tax_and_charge.service_charge_price)}
							</p>
						</div>
						<div className="flex justify-between pb-2">
							<p className="text-m-medium text-neutral-100">
								PB 1{' '}
								{paymentSummary.tax_and_charge.is_tax &&
									`${paymentSummary.tax_and_charge.tax_percentage}%`}
							</p>
							<p className="text-l-medium text-neutral-100">
								{toRupiah(paymentSummary.tax_and_charge.tax_price)}
							</p>
						</div>
						<div className="flex justify-between">
							<p className="text-l-semibold text-neutral-100">TOTAL</p>
							<p className="text-l-semibold text-neutral-100">
								{toRupiah(paymentSummary.payment_price)}
							</p>
						</div>

						<div className="divide-y divide-gray-300/50">
							<div className="flex flex-col pb-4" />
							<div className="flex flex-col pb-4" />
						</div>
					</section>
				</>
			)}

			<div className="flex flex-col p-4">
				<p className="mb-4 text-xl-semibold text-neutral-100">Payment option</p>
				<button
					type="button"
					onClick={() => router.push(`/payment/waiting/${transaction_uuid}`)}
					className="w-full rounded-[24px] border border-black bg-white px-4 py-2 text-l-semibold text-neutral-100"
				>
					Pay at Cashier
				</button>
			</div>
		</main>
	);
};

export default PagesPaymentSummary;
