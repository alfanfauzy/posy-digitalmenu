import {Categories} from 'core/domain/category/models';

import {GetCategoryListResponse} from '../types';

export const mapToCategoryModel = (datas: Array<GetCategoryListResponse>): Categories =>
	datas.map(data => ({
		uuid: data.uuid,
		category_name: data.category_name,
		is_active: data.is_active,
	}));
