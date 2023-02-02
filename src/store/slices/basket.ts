/**
 *
 * Basket reducer
 *
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddOnVariant } from './menu'
import type { Product } from '@/types/product'

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
  name: 'basket',
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
    onChangeQuantity: (
      state,
      action: PayloadAction<{ operator: 'plus' | 'minus'; value: number; orderId: number }>,
    ) => {
      const prevBasket = state.basket.find((el) => el.counter === action.payload.orderId)
      const basketIndex = state.basket.findIndex((el) => el.counter === action.payload.orderId)
      const newBasket = state.basket

      if (prevBasket) {
        switch (action.payload.operator) {
          case 'plus':
            prevBasket.quantity += action.payload.value
            break
          case 'minus':
            prevBasket.quantity -= action.payload.value
            break
          default:
            break
        }

        newBasket[basketIndex] = prevBasket
        state.basket = newBasket
      }
    },
    onChangeNotes: (state, action: PayloadAction<{ notes: string; orderId: number }>) => {
      const prevBasket = state.basket.find((el) => el.counter === action.payload.orderId)
      const basketIndex = state.basket.findIndex((el) => el.counter === action.payload.orderId)
      const newBasket = state.basket

      if (prevBasket) {
        prevBasket.notes = action.payload.notes
        newBasket[basketIndex] = prevBasket
        state.basket = newBasket
      }
    },
  },
})

// export the action from the slice
export const { addToBasket, updateBasket, onChangeQuantity, onChangeNotes } = BasketSlice.actions

export default BasketSlice.reducer
