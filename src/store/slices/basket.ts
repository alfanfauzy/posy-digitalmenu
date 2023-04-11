/**
 *
 * Basket reducer
 *
 */

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductDetail} from 'core/domain/product/models';

import {AddOnVariant} from './menu';

export type BasketItem = {
	product: ProductDetail;
	quantity: number;
	addOnVariant: Array<AddOnVariant>;
	counter: number;
	notes?: string;
};

export type BasketState = {
	basket: Array<BasketItem>;
};

const initialState: BasketState = {
	basket: [],
};

export const BasketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket: (state, action: PayloadAction<BasketItem>) => {
			state.basket.push(action.payload);
		},
		clearBasket: (state, action: PayloadAction<BasketState>) => {
			state.basket = action.payload.basket;
		},
		updateBasket: (state, action: PayloadAction<BasketItem>) => {
			const prevBasket = state.basket;
			const newBasketItem = action.payload;
			if (
				prevBasket.find(
					el =>
						el.product.detail.product.uuid === newBasketItem.product.detail.product.uuid &&
						el.counter === newBasketItem.counter,
				)
			) {
				const filteredBasket = prevBasket.filter(el => el.counter !== newBasketItem.counter);
				state.basket = filteredBasket;
				state.basket.push(action.payload);
			}
		},
		dropFromBasket: (state, action: PayloadAction<{counter: number}>) => {
			const prevBasket = state.basket;
			const filteredBasket = prevBasket.filter(el => el.counter !== action.payload.counter);
			state.basket = filteredBasket;
		},
		onChangeQuantity: (
			state,
			action: PayloadAction<{operator: 'plus' | 'minus'; value: number; orderId: number}>,
		) => {
			const prevBasket = state.basket.find(el => el.counter === action.payload.orderId);
			const basketIndex = state.basket.findIndex(el => el.counter === action.payload.orderId);
			const newBasket = state.basket;

			if (prevBasket) {
				switch (action.payload.operator) {
					case 'plus':
						prevBasket.quantity += action.payload.value;
						break;
					case 'minus':
						prevBasket.quantity -= action.payload.value;
						break;
					default:
						break;
				}

				newBasket[basketIndex] = prevBasket;
				state.basket = newBasket;
			}
		},
		onChangeNotes: (state, action: PayloadAction<{notes: string; orderId: number}>) => {
			const prevBasket = state.basket.find(el => el.counter === action.payload.orderId);
			const basketIndex = state.basket.findIndex(el => el.counter === action.payload.orderId);
			const newBasket = state.basket;

			if (prevBasket) {
				prevBasket.notes = action.payload.notes;
				newBasket[basketIndex] = prevBasket;
				state.basket = newBasket;
			}
		},
	},
});

// export the action from the slice
export const {
	addToBasket,
	updateBasket,
	dropFromBasket,
	onChangeQuantity,
	onChangeNotes,
	clearBasket,
} = BasketSlice.actions;

export default BasketSlice.reducer;
