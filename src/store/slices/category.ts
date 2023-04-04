import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category, Categorys } from 'core/domain/category/models'

export type CategoryState = { category: Array<Category> | undefined }

const initialState: CategoryState = {
  category: [],
}

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    onChangeCategoryList: (state: CategoryState, action: PayloadAction<Categorys | undefined>) => {
      state.category = action.payload
    },
  },
})

export const { onChangeCategoryList } = CategorySlice.actions
export default CategorySlice.reducer
