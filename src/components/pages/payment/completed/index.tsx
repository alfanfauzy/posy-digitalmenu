import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import PaymentSummaryMolecules from '@/molecules/payment/summary';
import {Rate} from 'antd';
import {GetPaymentCompoletedResponse} from 'core/data/payment/types';
import {useGetTransactionStatusViewModel} from 'core/view/transaction/view-modals/GetTransactionStatusViewModel';
import Image from 'next/image';
import {useRouter} from 'next/router';
import React from 'react';
import {useAppDispatch} from 'store/hooks';
import {onChangeRating, onChangeShowAddRating} from 'store/slices/rating';
import {generateTransactionCode} from 'utils/UtilsGenerateTransactionCode';

const ImagePaymentCompleted = require('public/check_completed.svg');

type PagesPaymentCompletedProps = {
	paymentCompleted: GetPaymentCompoletedResponse | undefined;
};

const PagesPaymentCompleted = ({paymentCompleted}: PagesPaymentCompletedProps) => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const {query} = router;
	const {transaction_uuid} = query;

	const handleChangeRating = (value: number) => {
		setTimeout(() => {
			dispatch(onChangeRating(value));
			router.push(`/rating/add/${transaction_uuid}`);
		}, 500);
	};

	const {data} = useGetTransactionStatusViewModel(transaction_uuid as string, {
		enabled: !!transaction_uuid,
	});

	const isReview = data?.is_reviewed;

	const handleAddRating = (val: number) => {
		dispatch(onChangeShowAddRating(true));
		handleChangeRating(val);
	};

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

			{!isReview && (
				<aside className="p-4 border rounded-2xl border-neutral-40 shadow-sm flex flex-col items-center gap-6">
					<span className="flex flex-col items-center gap-2">
						<h3 className="text-l-bold">How do you like our food/beverages?</h3>
						<h4 className="text-l-reguler">Rate your order</h4>
					</span>
					<Rate className="text-heading-s-bold" onChange={handleAddRating} />
				</aside>
			)}
		</main>
	);
};

export default PagesPaymentCompleted;
