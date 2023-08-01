import {mapToMenuProductDetailModel} from '@/data/product/mappers/ProductMapper';
import {
	GetProductMenuDetailParams,
	GetProductMenuDetailResult,
} from '@/domain/product/repositories/GetProductMenuRepository';
import {Response} from '@/domain/vo/BaseResponse';
import {UseQueryOptions} from '@tanstack/react-query';

import {useGetMenuProductDetailQuery} from '../sources/GetProductMenuDetailQuery';
import {GetProductDetailResponse} from '../types/GetProductMenuDetailType';

export const useGetMenuProductDetailUsecase = (
	param: GetProductMenuDetailParams,
	options?: UseQueryOptions<Response<GetProductDetailResponse>>,
): GetProductMenuDetailResult => {
	const {data, ...rest} = useGetMenuProductDetailQuery(param, options);

	if (data?.data) {
		const dataMapper = mapToMenuProductDetailModel(data.data);

		return {
			data: dataMapper,
			...rest,
		};
	}

	return {
		data: undefined,
		...rest,
	};
};
