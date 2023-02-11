import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import PersistStorage from 'redux-persist/lib/storage'
import basket from './slices/basket'
import menu from './slices/menu'

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
  }),
)

export default persistedReducer
