import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OutletDetail} from 'core/domain/outlet/models';

export type OutletState = {outlet: OutletDetail};

const initialState: OutletState = {
	outlet: {
		outlet: {
			uuid: '',
			restaurant_uuid: '',
			restaurant_code: '',
			restaurant_name: '',
			restaurant_email: '',
			outlet_name: '',
			outlet_code: '',
			region: {
				province_id: '',
				province_name: '',
				city_id: '',
				city_name: '',
				district_id: '',
				district_name: '',
				subdistrict_id: '',
				subdistrict_name: '',
				postal_code: '',
			},
			address: '',
			latitude: '',
			longitude: '',
			phone: '',
			email: '',
			logo_image_url: '',
		},
	},
};

export const OutletSlice = createSlice({
	name: 'outlet',
	initialState,
	reducers: {
		onChangeOutletDetail: (state: OutletState, action: PayloadAction<OutletDetail>) => {
			state.outlet = action.payload;
		},
	},
});

export const {onChangeOutletDetail} = OutletSlice.actions;
export default OutletSlice.reducer;
