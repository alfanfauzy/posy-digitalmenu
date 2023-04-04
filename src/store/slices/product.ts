import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductsMenu } from 'core/domain/product/models'

export type ProductMenuState = { objs: ProductsMenu }

const initialState: ProductMenuState = {
  objs: [],
}

export const ProductMenuSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productMenu: (state: ProductMenuState, action: PayloadAction<ProductsMenu>) => {
      state.objs = action.payload
    },
  },
})

export const { productMenu } = ProductMenuSlice.actions
export default ProductMenuSlice.reducer
