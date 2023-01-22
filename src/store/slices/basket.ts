/**
 *
 * Basket reducer
 *
 */

import { Product } from '@/types/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddOnVariant } from './order'

export interface BasketItem {
  product: Product
  quantity: number
  addOnVariant: AddOnVariant[]
  counter: number
  notes?: string
}

export interface BasketState {
  basket: BasketItem[]
}

const initialState: BasketState = {
  basket: [],
}

export const BasketSlice = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<BasketItem>) => {
      state.basket.push(action.payload)
    },
    updateBasket: (state, action: PayloadAction<BasketItem>) => {
      const prevBasket = state.basket
      const newBasketItem = action.payload
      if (
        prevBasket.find(
          (el) =>
            el.product.product_uuid === newBasketItem.product.product_uuid &&
            el.counter === newBasketItem.counter,
        )
      ) {
        const filteredBasket = prevBasket.filter((el) => el.counter !== newBasketItem.counter)
        state.basket = filteredBasket
        state.basket.push(action.payload)
      }
    },
  },
})

// export the action from the slice
export const { addToBasket, updateBasket } = BasketSlice.actions

export default BasketSlice.reducer
