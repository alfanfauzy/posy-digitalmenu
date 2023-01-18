import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import type { BasketState } from './basket'
import basket from './basket'

export interface Reducer {
  basket: BasketState
}

export const store = configureStore({
  reducer: {
    basket,
  },
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === 'production') return getDefaultMiddleware()

    return getDefaultMiddleware().concat(logger)
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
