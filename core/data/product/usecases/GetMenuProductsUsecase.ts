import {mapToMenuProductsModel} from '@/data/product/mappers/ProductMapper';
import {useGetMenuProductQuery} from '@/data/product/sources/GetProductsMenuQuery';
import {GetProductMenuResponse} from '@/data/product/types/GetProductsMenuType';
import {GetProductsMenuResult} from '@/domain/product/repositories/GetProductsMenuRepository';
import {DataObj, Response} from '@/domain/vo/BaseResponse';
import {UseQueryOptions} from '@tanstack/react-query';

export const useGetMenuProductsUsecase = (
	transaction_id: string,
	options?: UseQueryOptions<Response<DataObj<GetProductMenuResponse>>>,
): GetProductsMenuResult => {
	const {data, ...rest} = useGetMenuProductQuery(transaction_id, options);

	if (data?.data?.objs) {
		const dataMapper = mapToMenuProductsModel(data.data.objs);

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
