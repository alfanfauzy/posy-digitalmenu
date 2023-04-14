/**
 *
 * PagesBill
 *
 */

import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import EmptyBasketState from '@/organisms/empty-state/EmptyBasketState';
import {useQuery} from '@tanstack/react-query';
import {GetOrderDetail} from 'core/data/order/sources/GetOrderDetailQuery';
import {GetPaymentSummary} from 'core/data/payment/sources/GetPaymentSummaryQuery';
import {GetTransactionDetail} from 'core/data/transaction/sources/GetDetailTransactionQuery';
import {useRouter} from 'next/router';
import {Button, Loading} from 'posy-fnb-core';
import React from 'react';
import User from 'src/assets/icons/user';
import {toRupiah} from 'utils/common';
import {generateOrderStatus} from 'utils/UtilsGenerateOrderStatus';
import {generateOrderDetailStatus} from 'utils/UtilsGenerateStatusTransaction';
import {generateTransactionCode} from 'utils/UtilsGenerateTransactionCode';

const PagesBill = () => {
	const router = useRouter();
	const {transaction_uuid} = router.query;

	const {data: orderDetail, isLoading: isLoadingOrderDetail} = useQuery(
		['order/detail'],
		async () => {
			const response = await GetOrderDetail(transaction_uuid as string);
			const dataOrder = response.data.objs;
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

	const {data: paymentSummary} = useQuery(
		['payment/summary'],
		async () => {
			const response = await GetPaymentSummary(transaction_uuid as string);
			const dataOrder = response.data;
			return dataOrder;
		},
		{enabled: !!transaction_uuid},
	);

	const goBack = () => router.back();

	return (
		<main className="container mx-auto min-h-screen overflow-y-auto pt-4 pb-40 shadow-md">
			<div className="px-5">
				<MoleculesHeaderNavigation goBack={goBack} text="Bill Summary" />
			</div>

			{(isLoadingOrderDetail || isLoadingTransactionDetail) && (
				<div className="flex h-screen items-center justify-center overflow-hidden">
					<Loading size={60} />
				</div>
			)}

			{!orderDetail ? (
				<EmptyBasketState />
			) : (
				<>
					<section
						key={transactionDetail?.transaction_code}
						className="mt-4 flex items-center justify-between px-5"
					>
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
					{orderDetail &&
						orderDetail?.map((order, idx) => (
							<>
								{/* organims */}
								<div className="mt-4 flex items-center justify-between bg-neutral-30 px-5 py-2">
									<p className="text-l-semibold">Order {idx + 1}</p>
									<p className="text-l-regular">{generateOrderStatus(order.status)}</p>
								</div>
								<section className="p-5">
									{order.order_detail.map(item => (
										<aside key={item.uuid} className="pb-4">
											<div id="product-info" className="flex justify-between">
												<p className="mr-2 text-l-regular">x{item.qty}</p>
												<p className="flex-1 text-l-regular">{item.product_name}</p>
												<div className="flex flex-col items-end">
													<p className="text-l-regular">{toRupiah(item.price_subtotal)}</p>
													{item.price_discount !== 0 && (
														<p className="text-s-regular text-neutral-60 line-through">
															{toRupiah((item.price_base + item.price_addon) * item.qty)}
														</p>
													)}
												</div>
											</div>
											<div id="addon" className="mt-2 ml-6 flex flex-col gap-1">
												{item.addon_information.map(addon => (
													<div
														key={`${addon.addon_name}${addon.addon_price}`}
														className="flex items-start justify-between"
													>
														<p className="w-3/4 text-s-regular text-neutral-90 line-clamp-1">{`${addon.addon_name} ${addon.addon_variants[0].variant_name}`}</p>
													</div>
												))}
											</div>

											{item.order_note && (
												<div id="notes" className="ml-6 mt-0.5">
													<p className="text-s-regular text-neutral-70">
														<span className="text-s-semibold">Notes:</span> {item.order_note || '-'}
													</p>
												</div>
											)}

											<div className="mt-4 ml-6 flex items-center justify-between">
												<p className="text-m-semibold">Status</p>
												{generateOrderDetailStatus(item.status)}
											</div>
											<div className="mt-4 border-t border-neutral-30" />
										</aside>
									))}
								</section>
							</>
						))}

					<section className="p-4">
						<p className="text-left text-xl-semibold text-neutral-100">Payment Details</p>
						<div className="flex justify-between pb-2 pt-2">
							<p className="text-m-medium text-neutral-100">Subtotal</p>
							<p className="text-l-semibold text-neutral-100">
								{toRupiah(paymentSummary?.subtotal_price_gross as number)}
							</p>
						</div>
						<div className="flex justify-between pb-2">
							<p className="text-m-medium text-neutral-100">Discount</p>
							<p className="text-l-semibold text-neutral-100">
								-{toRupiah(paymentSummary?.discount_product_price as number)}
							</p>
						</div>
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

					{/* molecules */}
					<section
						style={{
							boxShadow: '0px -6px 24px rgb(0 0 0 / 10%)',
						}}
						className="fixed bottom-0 w-full max-w-[576px] rounded-t-2xl bg-neutral-10 px-4 pb-20 pt-6"
					>
						<Button
							fullWidth
							onClick={() => router.push(`/payment/summary/${transaction_uuid as string}`)}
						>
							Payment
						</Button>
					</section>
				</>
			)}
		</main>
	);
};

export default PagesBill;
