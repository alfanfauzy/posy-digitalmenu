import useDisclosure from '@/hooks/useDisclosure';
import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import TransactionHeaderMolecules from '@/molecules/header/transaction';
import PaymentDetailMolecules from '@/molecules/payment/detail';
import {useQuery} from '@tanstack/react-query';
import {GetPaymentMethodCategory} from 'core/data/payment/sources/GetPaymentMethodCategory';
import {GetPaymentSummaryResponse} from 'core/data/payment/types';
import {GetTransactionDetail} from 'core/data/transaction/sources/GetDetailTransactionQuery';
import {PaymentRequestPayload} from 'core/domain/payment/models';
import {GetFilterPaymentMethodCategory} from 'core/domain/payment/repositories/PaymentRepositories';
import {FinishTransactionParam} from 'core/domain/transaction/models';
import {useCreatePaymentRequestViewModal} from 'core/view/payment/view-models/CreatePaymentRequestViewModel';
import {useCreateFinishTransactionViewModal} from 'core/view/transaction/view-modals/CreateTransactionFinishViewModels';
import {useRouter} from 'next/router';
import {Button, Loading, Modal} from 'posy-fnb-core';
import React, {useMemo, useState} from 'react';
import Info from 'src/assets/icons/info';
import {logEvent} from 'utils/UtilsAnalytics';

type PagesPaymentSummaryProps = {
	paymentSummary: GetPaymentSummaryResponse | undefined;
};

const PagesPaymentSummary = ({paymentSummary}: PagesPaymentSummaryProps) => {
	const router = useRouter();
	const {transaction_uuid} = router.query;

	const [selectPaymentMetod, setSelectPaymentMethod] = useState('');

	const hooksParams: GetFilterPaymentMethodCategory = useMemo(
		() => ({
			transaction_uuid: transaction_uuid as string,
			search: [
				{
					field: 'with_payment_method',
					value: 'true',
				},
				{
					field: 'is_integration',
					value: 'true',
				},
				{
					field: 'is_show',
					value: 'true',
				},
			],
			sort: {field: 'created_at', value: 'desc'},
			page: 1,
			limit: 10,
		}),
		[transaction_uuid],
	);

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

	const goBack = () => {
		router.push(`/menu/${transaction_uuid}`);
		logEvent({category: 'payment', action: 'payment_back_click'});
	};

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

	const {createPaymentRequest, isLoading: isLoadingCreatePaymentRequest} =
		useCreatePaymentRequestViewModal({
			onSuccess(data) {
				if (data.code === 0) {
					window.open(data.data.invoice_url, '_blank');
					router.push(`/payment/pending/${transaction_uuid}`);
					close();
				}
			},
		});

	const {data: paymentMethodCategory} = useQuery(
		['payment-method/list', JSON.stringify(hooksParams)],
		async () => {
			const response = await GetPaymentMethodCategory({
				filter: hooksParams,
				transaction_uuid: transaction_uuid as string,
			});
			const dataOrder = response.data;
			return dataOrder;
		},
	);

	const handleFinishTransaction = () => {
		if (selectPaymentMetod === 'cash') {
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
		} else {
			const payloadPaymentRequet: PaymentRequestPayload = {
				transaction_id: transaction_uuid as string,
				payload: {
					payment_method_uuid: selectPaymentMetod,
				},
			};

			createPaymentRequest(payloadPaymentRequet);
		}
	};

	if (isLoadingTransactionDetail) {
		return (
			<div className="flex h-screen items-center justify-center overflow-hidden">
				<Loading size={60} />
			</div>
		);
	}

	const handleButtonPayAtCashier = () => {
		open();
		setSelectPaymentMethod('cash');
		logEvent({category: 'payment', action: 'payment_payatcashier_click'});
	};

	return (
		<main className="mx-auto pt-4 min-h-screen shadow-md">
			<div className="px-5">
				<MoleculesHeaderNavigation goBack={goBack} text="Payment Summary" />
			</div>

			{paymentSummary && (
				<>
					<TransactionHeaderMolecules transactionDetail={transactionDetail} />

					<PaymentDetailMolecules paymentSummary={paymentSummary} />
				</>
			)}

			<div className="flex flex-col p-4">
				<p className="mb-4 text-xl-semibold text-neutral-100">Payment option</p>
				<Button
					type="button"
					onClick={handleButtonPayAtCashier}
					className="w-full rounded-[24px] border border-black !bg-white px-5 py-2 text-l-semibold text-neutral-100"
				>
					Pay at Cashier
				</Button>
			</div>
			<div className="flex flex-col p-4">
				<p className="mb-4 text-xl-semibold text-neutral-100">E-Wallet</p>
				<div className="flex flex-col gap-4">
					{paymentMethodCategory?.objs
						.filter(payment => payment.is_show)
						.map(paymentMethod => (
							<Button
								key={paymentMethod.uuid}
								type="button"
								onClick={() => {
									open();
									setSelectPaymentMethod(paymentMethod.uuid);
								}}
								className="w-full rounded-[24px] border border-black !bg-white flex justify-center items-center h-16 py-3"
							>
								<img
									src={paymentMethod.logo_url}
									alt={`${paymentMethod.name}-logo`}
									width={paymentMethod.name !== 'LINKAJA' ? 90 : 50}
								/>
							</Button>
						))}
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
							isLoading={isLoadingCreate || isLoadingCreatePaymentRequest}
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
