/**
 *
 * PagesBill
 *
 */

import {GetOrderResponse} from 'core/data/order/types';
import {GetTransactionDetailResponse} from 'core/data/transaction/types';
import {useRouter} from 'next/router';
import {Button, Loading} from 'posy-fnb-core';
import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import User from 'src/assets/icons/user';
import {useAppSelector} from 'store/hooks';
import {toRupiah} from 'utils/common';

type PagesBillProps = {
	orderDetail: Array<GetOrderResponse> | undefined;
	isLoadingOrderDetail: boolean;
	transactionDetail: GetTransactionDetailResponse | undefined;
	isLoadingTransactionDetail: boolean;
};

const PagesBill = ({
	orderDetail,
	isLoadingOrderDetail,
	transactionDetail,
	isLoadingTransactionDetail,
}: PagesBillProps) => {
	const router = useRouter();

	const {transaction_uuid} = useAppSelector(state => state.transaction);

	const subTotal = orderDetail?.reduce((acc, obj) => acc + obj.price_subtotal_gross, 0);
	const subDiscount = orderDetail?.reduce((acc, obj) => acc + obj.price_discount, 0);
	const total = orderDetail?.reduce((acc, obj) => acc + obj.price_final, 0);

	const goBack = () => router.back();

	return (
		<main className="container mx-auto min-h-screen pt-4 pb-40 shadow-md">
			<section className="px-4">
				<div className="mb-4 flex items-center gap-4">
					<IoIosArrowBack onClick={goBack} size={24} className="cursor-pointer" />
					<p className="text-xxl-semibold">Bill Summary</p>
				</div>
				<div className="border-t border-neutral-30" />
			</section>

			{(isLoadingOrderDetail || isLoadingTransactionDetail) && (
				<div className="flex h-screen items-center justify-center overflow-hidden">
					<Loading size={60} />
				</div>
			)}

			{!orderDetail ? (
				<div className="mt-10 flex justify-center text-m-semibold">Your order is still empty!</div>
			) : (
				<>
					<section
						key={transactionDetail?.transaction_code}
						className="mt-4 flex items-center justify-between px-4"
					>
						<div className="flex flex-col items-start">
							<p className="text-m-medium text-neutral-60">Trx ID</p>
							<p className="mt-0.5 text-m-semibold text-neutral-80">
								{transactionDetail?.transaction_code}
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
					{orderDetail?.map((order, idx) => (
						<>
							{/* organims */}
							<div className="mt-4 flex items-center justify-between bg-neutral-30 px-4 py-2">
								<p className="text-l-semibold">Order {idx + 1}</p>
								<p className="text-l-regular">{order.status.split('_').join(' ')}</p>
							</div>
							<section className="px-4 pt-4">
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
											<p className="text-m-semibold text-[#003BD4]">{item.status}</p>
										</div>
										<div className="mt-4 border-t border-neutral-30" />
									</aside>
								))}
							</section>
						</>
					))}

					<section className="mt-2 px-4">
						<div className="mt-6 flex flex-col gap-2">
							<p className="text-m-semibold">Payment Details</p>
							<div className="flex items-center justify-between text-m-medium">
								<p>Subtotal</p>
								<p>{toRupiah(subTotal as number)}</p>
							</div>
							<div className="flex items-center justify-between text-m-medium">
								<p>Discount</p>
								<p>{toRupiah(subDiscount as number)}</p>
							</div>
							<div className="flex items-center justify-between text-l-semibold">
								<p>Total</p>
								<p>{toRupiah(total as number)}</p>
							</div>
						</div>
					</section>

					{/* molecules */}
					<section
						style={{
							boxShadow: '0px -6px 24px rgb(0 0 0 / 10%)',
						}}
						className="fixed bottom-0 w-full max-w-[576px] rounded-t-2xl bg-neutral-10 px-4 pb-20 pt-6"
					>
						<Button fullWidth onClick={() => router.push(`/payment/summary/${transaction_uuid}`)}>
							Payment
						</Button>
					</section>
				</>
			)}
		</main>
	);
};

export default PagesBill;
