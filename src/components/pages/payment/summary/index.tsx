import useDisclosure from '@/hooks/useDisclosure';
import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import {useQuery} from '@tanstack/react-query';
import {GetPaymentSummaryResponse} from 'core/data/payment/types';
import {GetTransactionDetail} from 'core/data/transaction/sources/GetDetailTransactionQuery';
import {FinishTransactionParam} from 'core/domain/transaction/models';
import {useCreateFinishTransactionViewModal} from 'core/view/transaction/view-modals/CreateTransactionFinishViewModels';
import {useRouter} from 'next/router';
import {Button, Loading, Modal} from 'posy-fnb-core';
import React from 'react';
import Info from 'src/assets/icons/info';
import User from 'src/assets/icons/user';
import {toRupiah} from 'utils/common';
import {generateTransactionCode} from 'utils/UtilsGenerateTransactionCode';

type PagesPaymentSummaryProps = {
	paymentSummary: GetPaymentSummaryResponse | undefined;
};

const PagesPaymentSummary = ({paymentSummary}: PagesPaymentSummaryProps) => {
	const router = useRouter();
	const {transaction_uuid} = router.query;

	const [isOpen, {open, close}] = useDisclosure({initialState: false});

	const {data: transactionDetail, isLoading: isLoadingTransactionDetail} = useQuery(
		['transaction/detail'],
		async () => {
			const response = await GetTransactionDetail(transaction_uuid as string);
			const dataTransaction = response.data;
			return dataTransaction;
		},
		{enabled: !!transaction_uuid},
	);

	const goBack = () => router.push(`/menu/${transaction_uuid}`);

	const {createTransactionFinish, isLoading: isLoadingCreate} = useCreateFinishTransactionViewModal(
		{
			onSuccess(data) {
				if (data.code === 0 && data.message === 'OK') {
					router.push(`/payment/waiting/${transaction_uuid}`);
					close();
				}
			},
		},
	);

	const handleFinishTransaction = () => {
		const payload: FinishTransactionParam = {
			id: transaction_uuid as string,
			payload: {
				customer_email: '',
				customer_name: '',
				customer_phone: '',
				payment_type: 'CASHIER',
			},
		};

		createTransactionFinish(payload);
	};

	if (isLoadingTransactionDetail) {
		return (
			<div className="flex h-screen items-center justify-center overflow-hidden">
				<Loading size={60} />
			</div>
		);
	}

	return (
		<main className="mx-auto pt-4 min-h-screen shadow-md">
			<div className="px-5">
				<MoleculesHeaderNavigation goBack={goBack} text="Payment Summary" />
			</div>

			{paymentSummary && (
				<>
					<section className="mt-4 flex items-center justify-between px-5">
						<div className="flex flex-col items-start">
							<p className="text-m-medium text-neutral-60">Transaction ID</p>
							<p className="mt-0.5 text-m-semibold text-neutral-80">
								{generateTransactionCode(transactionDetail?.transaction_code as string)}
							</p>
						</div>
						<div className="flex flex-col items-center">
							<p className="text-m-medium text-neutral-60">Table</p>
							<p className="mt-0.5 text-m-semibold text-neutral-80">
								{transactionDetail?.table_name || '-'}
							</p>
						</div>
						<div className="flex flex-col items-end">
							<p className="text-m-medium text-neutral-60">Total Pax</p>
							<div className="flex items-center gap-1.5">
								<p className="mt-0.5 text-m-semibold text-neutral-80">
									{transactionDetail?.total_pax}
								</p>
								<User />
							</div>
						</div>
					</section>

					<section className="p-4">
						<p className="text-left text-xl-semibold text-neutral-100">Payment Details</p>
						<div className="flex justify-between pb-2 pt-2">
							<p className="text-m-medium text-neutral-100">Subtotal</p>
							<p className="text-l-semibold text-neutral-100">
								{toRupiah(paymentSummary.subtotal_price_gross)}
							</p>
						</div>
						{paymentSummary?.discount_general_price ? (
							<div className="flex justify-between pb-2">
								<p className="text-m-medium text-neutral-100">{`Discount ${paymentSummary.discount_general_percentage}%`}</p>
								<p className="text-l-semibold text-neutral-100">
									-{toRupiah(paymentSummary.discount_general_price)}
								</p>
							</div>
						) : null}
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

						<div className="mt-6 border border-gray-300/50 border-b" />
					</section>
				</>
			)}

			<div className="flex flex-col p-4">
				<p className="mb-4 text-xl-semibold text-neutral-100">Payment option</p>
				<Button
					type="button"
					onClick={open}
					className="w-full rounded-[24px] border border-black bg-white px-5 py-2 text-l-semibold text-neutral-100"
				>
					Pay at Cashier
				</Button>
			</div>
			<div className="flex flex-col p-4">
				<p className="mb-4 text-xl-semibold text-neutral-100">E-Wallet</p>
				<div className="flex flex-col gap-4">
					<Button
						type="button"
						onClick={open}
						className="w-full rounded-[24px] border border-black bg-white px-5 py-2 text-l-semibold text-neutral-100 flex justify-center items-center"
					>
						<img src="/ovo.png" alt="ovo-logo" />
					</Button>
					<Button
						type="button"
						onClick={open}
						className="w-full rounded-[24px] border border-black bg-white px-5 py-2 text-l-semibold text-neutral-100 flex justify-center items-center"
					>
						<img src="/dana.png" alt="dana-logo" />
					</Button>
					<Button
						type="button"
						onClick={open}
						className="w-full rounded-[24px] border border-black bg-white px-5 py-2 text-l-semibold text-neutral-100 flex justify-center items-center"
					>
						<img src="/link-aja.png" alt="link-aja-logo" />
					</Button>
				</div>
			</div>

			<Modal open={isOpen} handleClose={close}>
				<section className="flex flex-col items-center justify-center pt-2">
					<Info />
					<div className="mt-4 px-4 text-center text-l-semibold">
						<p>Once you choose payment option,</p>
						<p>you can’t order again.</p>
					</div>
					<p className="mt-[10px] text-center text-m-regular">Are you sure you want to proceed?</p>
					<div className="mt-8 flex gap-2">
						<Button variant="secondary" size="m" onClick={close}>
							No
						</Button>
						<Button
							variant="primary"
							size="m"
							onClick={handleFinishTransaction}
							isLoading={isLoadingCreate}
						>
							Yes
						</Button>
					</div>
				</section>
			</Modal>
		</main>
	);
};

export default PagesPaymentSummary;
