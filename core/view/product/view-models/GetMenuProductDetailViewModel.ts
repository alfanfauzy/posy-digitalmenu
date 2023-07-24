import {GetProductDetailResponse} from '@/data/product/types/GetProductMenuDetailType';
import {useGetMenuProductDetailUsecase} from '@/data/product/usecases/GetMenuProductDetailUsecase';
import {
	GetProductMenuDetailParams,
	GetProductMenuDetailResult,
} from '@/domain/product/repositories/GetProductMenuRepository';
import {Response} from '@/domain/vo/BaseResponse';
import {UseQueryOptions} from '@tanstack/react-query';

export const useGetMenuProductDetailViewModel = (
	param: GetProductMenuDetailParams,
	options?: UseQueryOptions<Response<GetProductDetailResponse>>,
): GetProductMenuDetailResult => {
	const result = useGetMenuProductDetailUsecase(param, options);

	return result;
};
