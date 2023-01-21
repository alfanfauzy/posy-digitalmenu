import { combineReducers } from '@reduxjs/toolkit'
import basket from './slices/basket'
import order from './slices/order'

export default combineReducers({
  basket,
  order,
})
