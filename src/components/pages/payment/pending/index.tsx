import CountdownTimer from '@/atoms/countdown';
import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import TransactionHeaderMolecules from '@/molecules/header/transaction';
import PaymentDetailMolecules from '@/molecules/payment/detail';
import {useQuery} from '@tanstack/react-query';
import {GetPaymentRequestQuery} from 'core/data/payment/sources/GetPaymentRequestQuery';
import {GetPaymentSummary} from 'core/data/payment/sources/GetPaymentSummaryQuery';
import {GetTransactionDetail} from 'core/data/transaction/sources/GetDetailTransactionQuery';
import {differenceInMinutes, isAfter, parseISO} from 'date-fns';
import {useRouter} from 'next/router';
import {Button, Loading} from 'posy-fnb-core';
import React, {useState} from 'react';

const PagesPendingPayment = () => {
	const router = useRouter();
	const {transaction_uuid} = router.query;

	const [expiredPayment, setExpiredPayment] = useState('');

	const {data: paymentSummary} = useQuery(
		['payment/summary'],
		async () => {
			const response = await GetPaymentSummary(transaction_uuid as string);
			const dataOrder = response.data;
			return dataOrder;
		},
		{enabled: !!transaction_uuid},
	);

	const {data: transactionDetail, isLoading: isLoadingTransactionDetail} = useQuery(
		['transaction/detail'],
		async () => {
			const response = await GetTransactionDetail(transaction_uuid as string);
			const dataTransaction = response.data;
			return dataTransaction;
		},
		{enabled: !!transaction_uuid},
	);

	const {data: paymentRequest} = useQuery(
		['payment-request'],
		async () => {
			const response = await GetPaymentRequestQuery(transaction_uuid as string);
			const paymentRequestResponse = response.data;
			return paymentRequestResponse;
		},
		{
			enabled: !!transaction_uuid,
			refetchOnWindowFocus: true,
			onSuccess(response) {
				setExpiredPayment(response?.expired_at);
				//If transaction not available / null, redirect to page menu
				if (response === null) {
					router.push(`/menu/${transaction_uuid}`);
				}

				//If transaction is success paid, redirect to page payment completed
				if (response?.status === 'PAID') {
					router.push(`/payment/completed/${transaction_uuid}`);
				}

				//Check If expired payment request, than redirect to page timeout
				const dateTimeNow = new Date();
				const expiredDateTime = parseISO(response?.expired_at as string);

				const isTimeMoreThanExpired = isAfter(dateTimeNow, expiredDateTime);

				if (isTimeMoreThanExpired) {
					router.push(`/payment/timeout/${transaction_uuid}`);
				}
			},
		},
	);

	if (isLoadingTransactionDetail) {
		return (
			<div className="flex h-screen items-center justify-center overflow-hidden">
				<Loading size={60} />
			</div>
		);
	}

	const handleClickButton = () => {
		window.open(paymentRequest?.invoice_url, '_blank');
	};

	const getDifferenceInMinute = (expired_at: string) => {
		const currentDateTime = new Date();
		const expiredDateTime = parseISO(expired_at);

		const diffInMinute = differenceInMinutes(expiredDateTime, currentDateTime);

		return diffInMinute;
	};

	return (
		<main className="mx-auto pt-4 px-5 min-h-screen shadow-md">
			<MoleculesHeaderNavigation text="Payment Summary" isWithIcon={false} />

			{paymentSummary && (
				<>
					<TransactionHeaderMolecules transactionDetail={transactionDetail} />

					<section className="p-4">
						<h3 className="text-xl-semibold mb-4">You have an active payment</h3>
						<div className="shadow-md border border-neutral-30 rounded-lg p-4 flex flex-col">
							<div className="flex flex-row justify-between items-center">
								<p>Payment Time</p>
								{expiredPayment !== '' && (
									<CountdownTimer minutes={getDifferenceInMinute(expiredPayment)} />
								)}
							</div>
							<div className="my-4 border border-gray-300/50 border-b" />
							<div className="flex flex-row justify-between items-center">
								<p>Payment Method</p>
								<img
									src={paymentRequest?.payment_method.logo_url}
									alt={paymentRequest?.payment_method.name}
									width={paymentRequest?.payment_method.name === 'LINKAJA' ? 50 : 100}
								/>
							</div>
							<Button fullWidth className="mt-8" onClick={handleClickButton}>
								Continue Payment
							</Button>
						</div>
						<div className="mt-6 border border-gray-300/50 border-b" />
					</section>

					<PaymentDetailMolecules paymentSummary={paymentSummary} />
				</>
			)}
		</main>
	);
};

export default PagesPendingPayment;
