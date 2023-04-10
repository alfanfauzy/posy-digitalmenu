import {configureStore} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import logger from 'redux-logger';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore} from 'redux-persist';

import persistedReducer from './reducers';

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export {wrapper, persistor};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
