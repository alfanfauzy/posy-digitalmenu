import {ProductMenuDetail} from '@/domain/product/models/ProductMenuDetail';
import {ProductsMenu} from '@/domain/product/models/ProductsMenu';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ProductMenuState = {objs: ProductsMenu; detail: ProductMenuDetail};

const initialState: ProductMenuState = {
	objs: [],
	detail: {
		addons: [
			{
				uuid: '',
				addon_name: '',
				is_optional: false,
				can_choose_multiple: false,
				min_variant: 0,
				max_variant: 0,
				priority: 0,
				variants: [
					{
						uuid: '',
						variant_name: '',
						variant_price: 0,
						variant_priority: 0,
					},
				],
			},
		],
		detail: {
			cooking_duration: 0,
			is_available: false,
			is_discount: false,
			is_show: false,
			price: 0,
			price_discount: 0,
			price_after_discount: 0,
			price_discount_percentage: 0,
			price_final: 0,
			is_favourite: false,
			avg_rating: 0,
			total_review: 0,
			product: {
				avg_rating: 0,
				total_review: 0,
				uuid: '',
				restaurant_uuid: '',
				product_name: '',
				product_description: '',
				product_image_url: '',
				categories: [{uuid: '', category_name: '', is_active: false}],
			},
		},
	},
};

export const ProductMenuSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		onChangeProductMenu: (state: ProductMenuState, action: PayloadAction<ProductsMenu>) => {
			state.objs = action.payload;
		},
		setProductDetail: (state: ProductMenuState, action: PayloadAction<ProductMenuDetail>) => {
			state.detail = action.payload;
		},
	},
});

export const {onChangeProductMenu, setProductDetail} = ProductMenuSlice.actions;
export default ProductMenuSlice.reducer;
