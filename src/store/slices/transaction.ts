import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetTransactionDetailResponse} from 'core/data/transaction/types';

export type TransactionState = {
	transaction_uuid: string;
	transactionDetail: GetTransactionDetailResponse;
};

const initialState: TransactionState = {
	transaction_uuid: '',
	transactionDetail: {
		uuid: '',
		restaurant_uuid: '',
		restaurant_outlet_uuid: '',
		transaction_code: '',
		status: 'WAITING_ORDER',
		table_name: '',
		total_pax: 0,
		customer_name: '',
		customer_phone: '',
		customer_email: '',
		created_at: {
			seconds: 0,
			nanos: 0,
		},
	},
};

export const TransactionSlice = createSlice({
	name: 'transaction',
	initialState,
	reducers: {
		onChangeTransactionId: (state: TransactionState, action: PayloadAction<string>) => {
			state.transaction_uuid = action.payload;
		},
		onChangeTransactionDetail: (
			state: TransactionState,
			action: PayloadAction<GetTransactionDetailResponse>,
		) => {
			state.transactionDetail = action.payload;
		},
	},
});

export const {onChangeTransactionId, onChangeTransactionDetail} = TransactionSlice.actions;
export default TransactionSlice.reducer;
