import {GetPaymentCompoletedResponse} from 'core/data/payment/types';
import React, {useState} from 'react';
import {toRupiah} from 'utils/common';

type PaymentSummaryMoleculesProps = {
	paymentCompleted: GetPaymentCompoletedResponse | undefined;
};

const PaymentSummaryMolecules = ({paymentCompleted}: PaymentSummaryMoleculesProps) => {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<>
			<p
				className="text-center text-secondary-main text-m-bold cursor-pointer"
				onClick={() => setShowDetails(!showDetails)}
			>
				{showDetails ? 'Hide details' : 'Show details'}
			</p>
			<div className="m-6 border border-gray-300/50 border-b" />

			<div
				className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
					showDetails ? 'max-h-52' : 'max-h-0'
				}`}
			>
				<div className="divide-y divide-neutral-30">
					<div className="mx-auto pb-1">
						<div className="flex justify-between pb-2 pt-2">
							<p className="text-primary-main text-l-semibold">Total amount</p>
							<p className="text-l-semibold text-primary-main">
								{toRupiah(paymentCompleted?.total_amount as number)}
							</p>
						</div>
						<div className="flex justify-between pb-2">
							<p className="text-primary-main text-m-regular">Payment type</p>
							<p className="text-primary-main text-m-semibold">
								{paymentCompleted?.payment_method_category}
							</p>
						</div>
						<div className="flex justify-between pb-2">
							<p className="text-primary-main text-m-regular">Provider</p>
							<p className="text-m-semibold text-primary-main">
								{paymentCompleted?.payment_method}
							</p>
						</div>
					</div>
					<div className="pb- flex flex-col" />
				</div>

				<div className="divide-y divide-neutral-30 pb-4">
					<div className="mx-auto pb-1">
						<div className="flex justify-between pb-2 pt-2">
							<p className="text-primary-main text-l-semibold">Amount paid</p>
							<p className="text-l-semibold text-primary-main">
								{toRupiah(paymentCompleted?.paid_amount as number)}
							</p>
						</div>
						<div className="flex justify-between pb-4">
							<p className="text-primary-main text-l-semibold">Change</p>
							<p className="text-l-semibold text-primary-main">
								{toRupiah(paymentCompleted?.change_amount as number)}
							</p>
						</div>
					</div>
					<div className="flex flex-col" />
				</div>
			</div>
		</>
	);
};
export default PaymentSummaryMolecules;
