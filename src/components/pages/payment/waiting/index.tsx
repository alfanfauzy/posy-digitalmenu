import {useQuery} from '@tanstack/react-query';
import {GetPaymentSummaryResponse} from 'core/data/payment/types';
import {GetTransactionStatus} from 'core/data/transaction/sources/GetDetailTransactionStatusQuery';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Button} from 'posy-fnb-core';
import React from 'react';
import {toast} from 'react-toastify';
import {useAppSelector} from 'store/hooks';
import {toRupiah} from 'utils/common';
import {generateTransactionCode} from 'utils/UtilsGenerateTransactionCode';

const ImageWaitingPayment = require('public/waiting_payment.svg');

type PagesPaymentSummaryProps = {
	paymentSummary: GetPaymentSummaryResponse | undefined;
};

const PagesWaitingPayment = ({paymentSummary}: PagesPaymentSummaryProps) => {
	const router = useRouter();

	const transactionDetail = useAppSelector(state => state.transaction.transactionDetail);
	const {transaction_uuid} = router.query;

	const {isLoading: isLoadingTransactionStatus, refetch: handleGetTransactionStatus} = useQuery(
		['transaction/status'],
		async () => {
			const response = await GetTransactionStatus(transactionDetail.uuid);
			const dataTransaction = response.data;
			return dataTransaction;
		},
		{
			onSuccess: data => {
				if (data.is_paid) {
					router.push(`/payment/completed/${transaction_uuid}`);
				}
			},
		},
	);

	const handleCheckStatus = async () => {
		await handleGetTransactionStatus().then(data => {
			if (data.data?.is_waiting_payment) {
				toast.info('Waiting for payment', {
					closeButton: false,
				});
			}
		});
	};

	return (
		<main className="container mx-auto min-h-screen flex flex-col items-center py-4 shadow-md">
			{paymentSummary && (
				<section className="mt-4">
					<div className="mx-auto">
						<p className="text-center text-xxl-semibold text-neutral-100">
							Thank you for your order!
						</p>
						<p className="pt-3 text-center text-m-regular text-neutral-70">Your transacion ID</p>
						<p className="mt-1 mb-4 text-center text-[30px] font-semibold text-secondary-main">
							{generateTransactionCode(transactionDetail.transaction_code)}
						</p>
						<Image src={ImageWaitingPayment} priority alt="waiting payment" className="m-auto" />
					</div>
					<div className="divide-y divide-gray-300/50">
						<div className="mx-auto p-5">
							<p className="text-left text-l-regular text-neutral-100">
								Please go to the cashier to pay for your order. Our staff will be happy to assist
								you.
							</p>
						</div>
						<div className="flex flex-col pb-8" />
					</div>

					<aside className="px-4 pt-4">
						<p className="text-left text-xl-semibold text-neutral-100">Payment Details</p>
						<div className="flex justify-between pb-2 pt-2">
							<p className="text-m-medium text-neutral-100">Subtotal</p>
							<p className="text-l-semibold text-neutral-100">
								{toRupiah(paymentSummary.subtotal_price_gross)}
							</p>
						</div>
						{paymentSummary.discount_product_price > 0 && (
							<div className="flex justify-between pb-2">
								<p className="text-m-medium text-neutral-100">Discount</p>
								<p className="text-l-semibold text-neutral-100">
									-{toRupiah(paymentSummary.discount_product_price)}
								</p>
							</div>
						)}
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
					</aside>
				</section>
			)}

			<div className="flex flex-col py-4">
				<Button
					isLoading={isLoadingTransactionStatus}
					type="button"
					onClick={handleCheckStatus}
					className="w-full rounded-[24px] border border-black bg-white px-4 py-2 text-l-semibold text-neutral-100"
				>
					Check Status
				</Button>
			</div>
		</main>
	);
};

export default PagesWaitingPayment;
