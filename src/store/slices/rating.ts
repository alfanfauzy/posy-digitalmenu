import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type RatingState = {rating: number};

const initialState: RatingState = {
	rating: 0,
};

export const RatingSlice = createSlice({
	name: 'rating',
	initialState,
	reducers: {
		onChangeRating: (state: RatingState, action: PayloadAction<number>) => {
			state.rating = action.payload;
		},
	},
});

export const {onChangeRating} = RatingSlice.actions;
export default RatingSlice.reducer;
