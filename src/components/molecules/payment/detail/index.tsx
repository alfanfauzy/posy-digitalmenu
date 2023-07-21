import {GetPaymentSummaryResponse} from 'core/data/payment/types';
import React from 'react';
import {toRupiah} from 'utils/common';

type PaymentDetailMoleculesProps = {
	paymentSummary: GetPaymentSummaryResponse | undefined;
};

const PaymentDetailMolecules = ({paymentSummary}: PaymentDetailMoleculesProps) => {
	return (
		<section className="p-4">
			<p className="text-left text-xl-semibold text-neutral-100">Payment Details</p>
			<div className="flex justify-between pb-2 pt-2">
				<p className="text-m-medium text-neutral-100">Subtotal</p>
				<p className="text-l-semibold text-neutral-100">
					{toRupiah(paymentSummary?.subtotal_price as number)}
				</p>
			</div>
			{paymentSummary?.discount_general_price && paymentSummary?.discount_general_price > 0 ? (
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
					{paymentSummary?.tax_and_charge.is_service_charge &&
						`${paymentSummary?.tax_and_charge.service_charge_percentage}%`}
				</p>
				<p className="text-l-medium text-neutral-100">
					{toRupiah(paymentSummary?.tax_and_charge.service_charge_price as number)}
				</p>
			</div>
			<div className="flex justify-between pb-2">
				<p className="text-m-medium text-neutral-100">
					PB1{'  '}
					{paymentSummary?.tax_and_charge.is_tax &&
						`${paymentSummary?.tax_and_charge.tax_percentage}%`}
				</p>
				<p className="text-l-medium text-neutral-100">
					{toRupiah(paymentSummary?.tax_and_charge.tax_price as number)}
				</p>
			</div>
			<div className="flex justify-between">
				<p className="text-l-semibold text-neutral-100">TOTAL</p>
				<p className="text-l-semibold text-neutral-100">
					{toRupiah(paymentSummary?.payment_price as number)}
				</p>
			</div>

			<div className="mt-6 border border-gray-300/50 border-b" />
		</section>
	);
};

export default PaymentDetailMolecules;
