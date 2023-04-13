/**
 *
 * PagesBasket
 *
 */

import useDisclosure from '@/hooks/useDisclosure';
import {OrderDetail, OrderParam} from 'core/domain/order/models';
import {Response} from 'core/domain/vo/BaseResponse';
import {useCreateOrderViewModal} from 'core/view/order/view-modals/CreateOrderViewModel';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import {Button} from 'posy-fnb-core';
import React, {useMemo} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import {toast} from 'react-toastify';
import Info from 'src/assets/icons/info';
import PencilEdit from 'src/assets/icons/pencilEdit';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {clearBasket} from 'store/slices/basket';
import {
	calculateOrder,
	calculateOrderBeforeDiscount,
	calculateTotal,
	calculateTotalBeforeDiscount,
	toRupiah,
} from 'utils/common';

const Modal = dynamic(() => import('posy-fnb-core').then(el => el.Modal), {
	loading: () => <div />,
});

const PagesBasket: React.FC = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const {transaction_uuid} = router.query;

	const {basket} = useAppSelector(state => state.basket);
	const [isOpen, {open, close}] = useDisclosure({initialState: false});
	const subTotalBeforeDiscount = useMemo(() => calculateTotalBeforeDiscount(basket), [basket]);
	const subTotal = useMemo(() => calculateTotal(basket), [basket]);
	const subDiscount = subTotalBeforeDiscount - subTotal;

	const goBack = () => router.back();

	const {createOrder, isLoading: isLoadingCreate} = useCreateOrderViewModal({
		onSuccess(data) {
			if (data) {
				close();
				dispatch(clearBasket({basket: []}));
				router.push(`/bill/${transaction_uuid}`);
			}
		},
	});

	const handleConfirm = () => {
		const orderBasket: Array<OrderDetail> = basket.map(data => ({
			product_uuid: data.product.detail.product.uuid,
			qty: data.quantity,
			order_note: data.notes,
			addon: data.addOnVariant.map(variant => ({
				uuid: variant.addOnUuid,
				variant_uuids: data.addOnVariant.map(addon => addon.uuid),
			})),
		}));

		const payload: OrderParam = {id: transaction_uuid as string, payload: {order: orderBasket}};

		createOrder(payload);
	};

	const editOrder = (orderId: string, productId: string) => {
		setTimeout(() => {
			router.push({
				pathname: `/menu/${transaction_uuid}/${productId}`,
				query: {counter: orderId},
			});
		}, 100);
	};

	return (
		<main className="container mx-auto min-h-screen pt-4 pb-40 shadow-md">
			{/* molecules */}
			<section className="px-4">
				<div className="mb-4 flex items-center gap-4">
					<IoIosArrowBack onClick={goBack} size={24} className="cursor-pointer" />
					<p className="text-xxl-semibold">Your Basket</p>
				</div>
				<div className="border-t border-neutral-30" />
			</section>

			{basket.length === 0 && (
				<div className="mt-10 flex justify-center text-m-semibold">Your basket is still empty!</div>
			)}

			{/* molecules */}
			{basket.length > 0 && (
				<>
					{/* organims */}
					<section className="px-4 pt-4">
						{basket.map(item => (
							<aside key={item.counter} className="pb-4">
								<div id="product-info" className="flex justify-between">
									<p className="mr-2 text-l-regular">x{item.quantity}</p>
									<p className="flex-1 text-l-regular">
										{item.product.detail.product.product_name}
									</p>
									<div className="flex flex-col items-end">
										<p className="text-l-regular">
											{item.product.detail.price_discount !== 0
												? toRupiah(calculateOrder(item) || 0)
												: toRupiah(calculateOrderBeforeDiscount(item) || 0)}
										</p>
										{item.product.detail.is_discount && (
											<p className="text-s-regular text-neutral-60 line-through">
												{toRupiah(calculateOrderBeforeDiscount(item))}
											</p>
										)}
									</div>
								</div>
								<div id="addon" className="mt-2 ml-6 flex flex-col gap-1">
									{item.addOnVariant.map(addon => (
										<div key={addon.variant_uuid} className="flex items-start justify-between">
											<p className="w-3/4 text-s-regular text-neutral-90 line-clamp-1">{`${addon.addOnName} ${addon.variant_name}`}</p>
										</div>
									))}
								</div>

								<div id="notes" className="ml-6 mt-0.5">
									<p className="text-s-regular text-neutral-70">
										<span className="text-s-semibold">Notes:</span> {item.notes || '-'}
									</p>
								</div>

								<div className="mt-4 ml-6 flex items-center justify-between">
									<div
										role="button"
										tabIndex={0}
										onClick={() =>
											editOrder(item.counter.toString(), item.product.detail.product.uuid)
										}
										onKeyDown={() =>
											editOrder(item.counter.toString(), item.product.detail.product.uuid)
										}
										className="flex items-center gap-1.5"
									>
										<PencilEdit />
										<p className="text-s-semibold">Edit Order</p>
									</div>
								</div>
								<div className="mt-4 border-t border-neutral-30" />
							</aside>
						))}
					</section>

					<section className="mt-2 px-4">
						<Button variant="secondary" size="m" fullWidth onClick={goBack}>
							+ Add more order
						</Button>

						<div className="mt-6 flex flex-col gap-2">
							<p className="text-m-semibold">Payment Details</p>
							<div className="flex items-center justify-between text-m-medium">
								<p>Subtotal</p>
								<p>{toRupiah(subTotalBeforeDiscount)}</p>
							</div>
							<div className="flex items-center justify-between text-m-medium">
								<p>Discount</p>
								<p>{toRupiah(subDiscount)}</p>
							</div>
							<div className="flex items-center justify-between text-l-semibold">
								<p>Total</p>
								<p>{toRupiah(subTotal)}</p>
							</div>
						</div>
					</section>

					<section
						style={{
							boxShadow: '0px -6px 24px rgb(0 0 0 / 10%)',
						}}
						className="fixed bottom-0 w-full max-w-[576px] rounded-t-2xl bg-neutral-10 px-4 pb-20 pt-6"
					>
						<Button onClick={open} fullWidth>
							Submit Order
						</Button>
					</section>
				</>
			)}

			{/* molecules */}
			<Modal open={isOpen} handleClose={close}>
				<section className="flex flex-col items-center justify-center pt-2">
					<Info />
					<div className="mt-4 px-4">
						<p className="text-center text-l-semibold">Submitted order cannot be cancelled</p>
					</div>
					<p className="mt-[10px] text-center text-m-regular">Are you sure you want to proceed?</p>
					<div className="mt-8 flex gap-2">
						<Button variant="secondary" size="m" onClick={close}>
							No
						</Button>
						<Button variant="primary" size="m" onClick={handleConfirm} isLoading={isLoadingCreate}>
							Yes
						</Button>
					</div>
				</section>
			</Modal>
		</main>
	);
};

export default PagesBasket;
