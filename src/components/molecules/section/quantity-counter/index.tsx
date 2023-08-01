import {IconButton} from 'posy-fnb-core';
import React, {useCallback} from 'react';
import {BiMinus, BiPlus} from 'react-icons/bi';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {onChangeQuantity} from 'store/slices/menu';
import {logEvent} from 'utils/UtilsAnalytics';

const MoleculesSectionQuantityCounter = () => {
	const dispatch = useAppDispatch();
	const quantity = useAppSelector(state => state.menu.orderForm.quantity);

	const handleIncreamentQuantity = useCallback(() => {
		dispatch(onChangeQuantity({operator: 'plus', value: 1}));
		logEvent({category: 'menu_detail', action: 'menudetails_plusitem_click'});
	}, [dispatch]);

	const handleDecreamentQuantity = useCallback(() => {
		dispatch(onChangeQuantity({operator: 'minus', value: 1}));
		logEvent({category: 'menu_detail', action: 'menudetails_minusitem_click'});
	}, [dispatch]);

	return (
		<div className="flex items-center">
			<p className="flex-1 gap-4 text-xl-semibold">Item Quantity</p>
			<div className="flex gap-3">
				<IconButton disabled={quantity === 0} onClick={handleDecreamentQuantity}>
					<BiMinus />
				</IconButton>
				<div>{quantity}</div>
				<IconButton onClick={handleIncreamentQuantity}>
					<BiPlus />
				</IconButton>
			</div>
		</div>
	);
};

export default MoleculesSectionQuantityCounter;
