import PaymentDetailMolecules from '@/molecules/payment/detail';
import {useQuery} from '@tanstack/react-query';
import {GetPaymentSummaryResponse} from 'core/data/payment/types';
import {GetTransactionDetail} from 'core/data/transaction/sources/GetDetailTransactionQuery';
import {GetTransactionStatus} from 'core/data/transaction/sources/GetDetailTransactionStatusQuery';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Button, Loading} from 'posy-fnb-core';
import React from 'react';
import {toast} from 'react-toastify';
import {generateTransactionCode} from 'utils/UtilsGenerateTransactionCode';

const ImageWaitingPayment = require('public/waiting_payment.svg');

type PagesPaymentSummaryProps = {
	paymentSummary: GetPaymentSummaryResponse | undefined;
};

const PagesWaitingPayment = ({paymentSummary}: PagesPaymentSummaryProps) => {
	const router = useRouter();
	const {transaction_uuid} = router.query;

	const {data: transactionDetail, isLoading: isLoadingTransactionDetail} = useQuery(
		['transaction/detail'],
		async () => {
			const response = await GetTransactionDetail(transaction_uuid as string);
			const dataTransaction = response.data;
			return dataTransaction;
		},
		{enabled: !!transaction_uuid},
	);

	const {isLoading: isLoadingTransactionStatus, refetch: handleGetTransactionStatus} = useQuery(
		['transaction/status'],
		async () => {
			const response = await GetTransactionStatus(transaction_uuid as string);
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
		<main className="mx-auto overflow-y-auto shadow-md min-h-screen h-full flex flex-col items-center py-4">
			{paymentSummary && (
				<section className="mt-4">
					<div className="mx-auto">
						<p className="text-center text-xxl-semibold text-neutral-100">
							Thank you for your order!
						</p>
						<p className="pt-3 text-center text-m-regular text-neutral-70">Your transacion ID</p>
						<p className="mt-1 mb-4 text-center text-[30px] font-semibold text-secondary-main">
							{isLoadingTransactionDetail ? (
								<Loading size={10} />
							) : (
								generateTransactionCode(transactionDetail?.transaction_code as string)
							)}
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
						<div className="flex flex-col" />
					</div>

					<PaymentDetailMolecules paymentSummary={paymentSummary} />
				</section>
			)}

			<div className="flex flex-col pb-4">
				<Button
					isLoading={isLoadingTransactionStatus}
					type="button"
					onClick={handleCheckStatus}
					className="w-full rounded-[24px] border border-black !bg-secondary-main  px-4 py-2 text-l-semibold text-white"
				>
					Check Status
				</Button>
			</div>
		</main>
	);
};

export default PagesWaitingPayment;
