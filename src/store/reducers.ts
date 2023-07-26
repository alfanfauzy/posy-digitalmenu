import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import PersistStorage from 'redux-persist/lib/storage';

import basket from './slices/basket';
import category from './slices/category';
import menu from './slices/menu';
import outlet from './slices/outlet';
import product from './slices/product';
import rating from './slices/rating';

const persistConfig = {
	key: 'root',
	version: 1,
	whitelist: ['basket', 'rating'],
	storage: PersistStorage,
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		basket,
		menu,
		category,
		product,
		outlet,
		rating,
	}),
);

export default persistedReducer;
