/**
 *
 * Order reducer
 *
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface OrderState {
  search: string
  category: { label: string; value: string }
}

const initialState: OrderState = {
  search: '',
  category: { label: '', value: '' },
}

export const OrderSlice = createSlice({
  name: 'Order',
  initialState,
  reducers: {
    onChangeCategory: (state, action: PayloadAction<{ label: string; value: string }>) => {
      state.category = action.payload
    },
  },
})

// export the action from the slice
export const { onChangeCategory } = OrderSlice.actions

// export const actions = {
//   onChangeLogin: (payload: boolean) => async (dispatch: any) => {
//     dispatch(changeLogin(payload))
//   },
// }

export const getters = {}

export default OrderSlice.reducer
