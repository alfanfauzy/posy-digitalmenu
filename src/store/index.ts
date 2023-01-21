import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import reducer from './reducers'

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === 'production') return getDefaultMiddleware()

    return getDefaultMiddleware().concat(logger)
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
