import {GetProductMenuResponse} from '@/data/product/types/GetProductsMenuType';
import {useGetMenuProductsUsecase} from '@/data/product/usecases/GetMenuProductsUsecase';
import {GetProductsMenuResult} from '@/domain/product/repositories/GetProductsMenuRepository';
import {DataObj, Response} from '@/domain/vo/BaseResponse';
import {UseQueryOptions} from '@tanstack/react-query';

export const useGetMenuProductsViewModel = (
	transaction_id: string,
	options?: UseQueryOptions<Response<DataObj<GetProductMenuResponse>>>,
): GetProductsMenuResult => {
	const result = useGetMenuProductsUsecase(transaction_id, options);

	return result;
};
