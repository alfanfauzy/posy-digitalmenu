import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type TransactionState = {transaction_uuid: string};

const initialState: TransactionState = {
	transaction_uuid: '',
};

export const TransactionSlice = createSlice({
	name: 'transaction',
	initialState,
	reducers: {
		onChangeTransactionId: (state: TransactionState, action: PayloadAction<string>) => {
			state.transaction_uuid = action.payload;
		},
	},
});

export const {onChangeTransactionId} = TransactionSlice.actions;
export default TransactionSlice.reducer;
