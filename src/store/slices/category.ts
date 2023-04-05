import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from 'core/domain/category/models'

export type CategoryState = { category: Array<Category> }

const initialState: CategoryState = {
  category: [],
}

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    onChangeCategoryList: (state: CategoryState, action: PayloadAction<Array<Category>>) => {
      state.category = action.payload
    },
  },
})

export const { onChangeCategoryList } = CategorySlice.actions
export default CategorySlice.reducer
