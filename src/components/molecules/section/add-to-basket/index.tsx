/* eslint-disable react-hooks/exhaustive-deps */
import {ProductDetail} from 'core/domain/product/models';
import {useRouter} from 'next/router';
import {Button} from 'posy-fnb-core';
import React, {useMemo} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {addToBasket, dropFromBasket, updateBasket} from 'store/slices/basket';
import {calculateAddOn, toRupiah} from 'utils/common';

type MoleculesSectionAddToBasketProps = {
	product: ProductDetail;
};

const MoleculesSectionAddToBasket = ({product}: MoleculesSectionAddToBasketProps) => {
	const router = useRouter();
	const {counter} = router.query;
	const dispatch = useAppDispatch();
	const quantity = useAppSelector(state => state.menu.orderForm.quantity);
	const addOnVariant = useAppSelector(state => state.menu.orderForm.addOnVariant);
	const notes = useAppSelector(state => state.menu.orderForm.notes);

	const price = product.detail.is_discount ? product.detail.price_final : product.detail.price;

	const total = useMemo(
		() => (calculateAddOn(addOnVariant) + price) * quantity,
		[quantity, addOnVariant],
	);

	const goBack = () => {
		setTimeout(() => {
			router.back();
		}, 300);
	};

	const handleAddToBasket = () => {
		dispatch(
			addToBasket({
				quantity,
				product,
				addOnVariant,
				notes,
				counter: Math.floor(Math.random() * Date.now()),
			}),
		);
		goBack();
	};

	const handleUpdateBasket = (basketId: number) => {
		dispatch(
			updateBasket({
				quantity,
				product,
				addOnVariant,
				notes,
				counter: +basketId,
			}),
		);
		goBack();
	};

	const handleDropFromBasket = (basketId: number) => {
		dispatch(dropFromBasket({counter: basketId}));
		goBack();
	};

	if (counter && quantity === 0) {
		return (
			<div className="mt-6">
				<Button onClick={() => handleDropFromBasket(+counter)} fullWidth variant="red-accent">
					<p className="text-l-semibold">Remove</p>
				</Button>
			</div>
		);
	}

	if (!counter && quantity === 0) {
		return (
			<div className="mt-6">
				<Button onClick={goBack} fullWidth variant="primary">
					<p className="text-l-semibold">Back to Menu</p>
				</Button>
			</div>
		);
	}

	if (counter) {
		return (
			<div className="mt-6">
				<Button onClick={() => handleUpdateBasket(+counter)} fullWidth variant="primary">
					<div className="flex items-center justify-between">
						<p className="text-l-semibold">Update a Basket</p>
						<p className="flex flex-1 justify-end text-xxl-semibold">{toRupiah(total)}</p>
					</div>
				</Button>
			</div>
		);
	}

	return (
		<div className="mt-6">
			<Button onClick={handleAddToBasket} fullWidth variant="primary">
				<div className="flex items-center justify-between">
					<p className="text-l-semibold">Add to Basket</p>
					<p className="flex flex-1 justify-end text-xxl-semibold">{toRupiah(total)}</p>
				</div>
			</Button>
		</div>
	);
};

export default MoleculesSectionAddToBasket;
