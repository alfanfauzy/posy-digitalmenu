/**
 *
 * Basket reducer
 *
 */

import { Product } from '@/types/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BasketItem {
  product: Product
  quantity: number
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
  },
})

// export the action from the slice
export const { addToBasket } = BasketSlice.actions

// export const actions = {
//   onChangeLogin: (payload: boolean) => async (dispatch: any) => {
//     dispatch(changeLogin(payload))
//   },
// }

export const getters = {}

export default BasketSlice.reducer
