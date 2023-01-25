import { combineReducers } from '@reduxjs/toolkit'
import basket from './slices/basket'
import menu from './slices/menu'

export default combineReducers({
  basket,
  menu,
})
