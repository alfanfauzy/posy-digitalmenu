import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import PersistStorage from 'redux-persist/lib/storage';

import basket from './slices/basket';
import category from './slices/category';
import menu from './slices/menu';
import outlet from './slices/outlet';
import product from './slices/product';
import transaction from './slices/transaction';

const persistConfig = {
	key: 'root',
	version: 1,
	whitelist: ['basket', 'transaction'],
	storage: PersistStorage,
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		basket,
		menu,
		category,
		product,
		transaction,
		outlet,
	}),
);

export default persistedReducer;
