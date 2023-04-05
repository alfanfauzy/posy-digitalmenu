import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import PersistStorage from 'redux-persist/lib/storage'
import basket from './slices/basket'
import menu from './slices/menu'
import category from './slices/category'
import product from './slices/product'
import transaction from './slices/transaction'

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['basket'],
  storage: PersistStorage,
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    basket,
    menu,
    category,
    product,
    transaction,
  }),
)

export default persistedReducer
