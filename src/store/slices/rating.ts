import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type RatingState = {rating: number; isShowAddRating: boolean};

const initialState: RatingState = {
	rating: 0,
	isShowAddRating: false,
};

export const RatingSlice = createSlice({
	name: 'rating',
	initialState,
	reducers: {
		onChangeRating: (state: RatingState, action: PayloadAction<number>) => {
			state.rating = action.payload;
		},
		onChangeShowAddRating: (state: RatingState, action: PayloadAction<boolean>) => {
			state.isShowAddRating = action.payload;
		},
		onResetRating: (state: RatingState) => {
			state.isShowAddRating = false;
			state.rating = 0;
		},
	},
});

export const {onChangeRating, onChangeShowAddRating, onResetRating} = RatingSlice.actions;
export default RatingSlice.reducer;
