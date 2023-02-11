/**
 *
 * Menu reducer
 *
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AddOnVariant = {
  addOnName: string
  addOnUuid: string
  variant_name: string
  variant_uuid: string
  price: number
}
export interface MenuState {
  search: string
  category: { label: string; value: string }
  orderForm: {
    quantity: number
    addOnVariant: AddOnVariant[]
    notes?: string
  }
  filteredMenu: any[]
}

const initialState: MenuState = {
  search: '',
  category: { label: '', value: '' },
  orderForm: {
    quantity: 0,
    addOnVariant: [],
  },
  filteredMenu: [],
}

export const MenuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    onChangeCategory: (state, action: PayloadAction<{ label: string; value: string }>) => {
      state.category = action.payload
    },
    onChangeNotes: (state, action: PayloadAction<string>) => {
      state.orderForm.notes = action.payload
      state.orderForm.notes = action.payload
      state.orderForm.notes = action.payload
    },
    onChangeQuantity: (
      state,
      action: PayloadAction<{ operator: 'plus' | 'minus'; value: number }>,
    ) => {
      switch (action.payload.operator) {
        case 'plus':
          state.orderForm.quantity += action.payload.value
          break
        case 'minus':
          state.orderForm.quantity -= action.payload.value
          break
        default:
          break
      }
    },
    onEditOrder: (
      state,
      action: PayloadAction<{
        quantity: number
        addOnVariant: AddOnVariant[]
        notes?: string
      }>,
    ) => {
      state.orderForm.quantity = action.payload.quantity
      state.orderForm.notes = action.payload.notes
      state.orderForm.addOnVariant = action.payload.addOnVariant
    },
    onLeaveOrderPage: (state) => {
      state.orderForm.quantity = 0
      state.orderForm.notes = ''
      state.orderForm.addOnVariant = []
    },
    onChangeAddOn: (
      state,
      action: PayloadAction<{ type: 'radio' | 'checkbox'; addOnVariant: AddOnVariant }>,
    ) => {
      const { addOnVariant } = action.payload
      const prevAddOnVariant = state.orderForm.addOnVariant

      switch (action.payload.type) {
        case 'radio':
          if (prevAddOnVariant.find((el) => el.addOnUuid === addOnVariant.addOnUuid)) {
            const filteredArr = prevAddOnVariant.filter(
              (el) => el.addOnUuid !== addOnVariant.addOnUuid,
            )
            filteredArr.push(addOnVariant)
            state.orderForm.addOnVariant = filteredArr
          }

          prevAddOnVariant.push(addOnVariant)
          break
        case 'checkbox':
          if (prevAddOnVariant.find((el) => el.variant_uuid === addOnVariant.variant_uuid)) {
            const filteredArr = prevAddOnVariant.filter(
              (el) => el.variant_uuid !== addOnVariant.variant_uuid,
            )
            state.orderForm.addOnVariant = filteredArr
          }
          prevAddOnVariant.push(addOnVariant)
          break
        default:
          break
      }
    },
    onChangeSearch: (state, action: PayloadAction<{ search: string; menus: any[] }>) => {
      const { menus, search } = action.payload
      const regex = new RegExp(search, 'i')
      const filteredMenu = menus
        .flatMap((el) => el.product)
        .filter(({ product_name }) => product_name.match(regex))
      state.filteredMenu = filteredMenu
      state.search = search
    },
    onClearSearch: (state) => {
      state.search = ''
    },
  },
})

// export the action from the slice
export const {
  onChangeCategory,
  onChangeQuantity,
  onChangeNotes,
  onLeaveOrderPage,
  onEditOrder,
  onChangeAddOn,
  onChangeSearch,
  onClearSearch,
} = MenuSlice.actions

export default MenuSlice.reducer
