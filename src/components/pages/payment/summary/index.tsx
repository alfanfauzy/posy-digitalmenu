import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import {GetPaymentSummaryResponse} from 'core/data/payment/types';
import {FinishTransactionParam} from 'core/domain/transaction/models';
import {useCreateFinishTransactionViewModal} from 'core/view/transaction/view-modals/CreateTransactionFinishViewModels';
import {useRouter} from 'next/router';
import {Button} from 'posy-fnb-core';
import React from 'react';
import User from 'src/assets/icons/user';
import {useAppSelector} from 'store/hooks';
import {toRupiah} from 'utils/common';
import {generateTransactionCode} from 'utils/UtilsGenerateTransactionCode';

type PagesPaymentSummaryProps = {
	paymentSummary: GetPaymentSummaryResponse | undefined;
};

const PagesPaymentSummary = ({paymentSummary}: PagesPaymentSummaryProps) => {
	const router = useRouter();
	const {transaction_uuid} = useAppSelector(state => state.transaction);
	const transactionDetail = useAppSelector(state => state.transaction.transactionDetail);

	const goBack = () => router.push(`/menu/${transaction_uuid}`);

	const {createTransactionFinish, isLoading: isLoadingCreate} = useCreateFinishTransactionViewModal(
		{
			onSuccess(data) {
				if (data.code === 0 && data.message === 'OK') {
					router.push(`/payment/waiting/${transaction_uuid}`);
				}
			},
		},
	);

	const handleFinishTransaction = () => {
		const payload: FinishTransactionParam = {
			id: transaction_uuid,
			payload: {
				customer_email: '',
				customer_name: '',
				customer_phone: '',
				payment_type: 'CASHIER',
			},
		};

		createTransactionFinish(payload);
	};

	return (
		<main className="container mx-auto min-h-screen pt-4 pb-40 shadow-md">
			<MoleculesHeaderNavigation goBack={goBack} text="Payment Summary" />

			{paymentSummary && (
				<>
					<section key={transaction_uuid} className="mt-4 flex items-center justify-between px-4">
						<div className="flex flex-col items-start">
							<p className="text-m-medium text-neutral-60">Transaction ID</p>
							<p className="mt-0.5 text-m-semibold text-neutral-80">
								{generateTransactionCode(transactionDetail.transaction_code)}
							</p>
						</div>
						<div className="flex flex-col items-center">
							<p className="text-m-medium text-neutral-60">Table</p>
							<p className="mt-0.5 text-m-semibold text-neutral-80">
								{transactionDetail.table_name || '-'}
							</p>
						</div>
						<div className="flex flex-col items-end">
							<p className="text-m-medium text-neutral-60">Total Pax</p>
							<div className="flex items-center gap-1.5">
								<p className="mt-0.5 text-m-semibold text-neutral-80">
									{transactionDetail.total_pax}
								</p>
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
								PB1{'  '}
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
				<Button
					type="button"
					isLoading={isLoadingCreate}
					onClick={() => handleFinishTransaction()}
					className="w-full rounded-[24px] border border-black bg-white px-4 py-2 text-l-semibold text-neutral-100"
				>
					Pay at Cashier
				</Button>
			</div>
		</main>
	);
};

export default PagesPaymentSummary;
