/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * PagesMenuDetail
 *
 */

import CardMenuDetail from '@/molecules/card/menu/detail';
import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import SectionBottomBar from '@/organisms/bottom-bar/item-quantity';
import FormOrder from '@/organisms/form/order';
import {useRouter} from 'next/router';
import {Loading} from 'posy-fnb-core';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {onEditOrder, onLeaveOrderPage} from 'store/slices/menu';

const PagesMenuDetail: React.FC = () => {
	const {query, push, events} = useRouter();
	const {transaction_uuid} = query;
	const dispatch = useAppDispatch();
	const basket = useAppSelector(state => state.basket);
	const productDetail = useAppSelector(state => state.product.detail);
	const [loading, setLoading] = useState(false);

	const goBack = () => push(`/menu/${transaction_uuid}`);

	useEffect(() => {
		const exitingFunction = () => dispatch(onLeaveOrderPage());

		events.on('routeChangeStart', exitingFunction);

		return () => {
			events.off('routeChangeStart', exitingFunction);
		};
	}, []);

	useEffect(() => {
		const {counter} = query;
		if (counter) {
			const filteredBasket = basket.basket.find(el => el.counter.toString() === counter);
			if (filteredBasket) {
				setLoading(true);
				dispatch(
					onEditOrder({
						addOnVariant: filteredBasket.addOnVariant,
						quantity: filteredBasket.quantity,
						notes: filteredBasket.notes,
					}),
				);
				setTimeout(() => {
					setLoading(false);
				}, 500);
			}
		}
	}, []);

	if (loading) {
		return (
			<div className="flex h-screen items-center justify-center overflow-hidden">
				<Loading size={60} />
			</div>
		);
	}

	return (
		<main className="p-4 shadow-md">
			<MoleculesHeaderNavigation goBack={goBack} text={productDetail.detail.product.product_name} />
			<CardMenuDetail product={productDetail} />
			<FormOrder add_on={productDetail.addons} />
			<SectionBottomBar product={productDetail} />
		</main>
	);
};

export default PagesMenuDetail;
