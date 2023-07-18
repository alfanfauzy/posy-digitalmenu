import {GetProductMenuResponse} from '@/data/product/types';
import {DataObj, Response} from '@/domain/vo/BaseResponse';
import {UseQueryOptions, useQuery} from '@tanstack/react-query';
import Get from 'api/get';
import {AxiosError} from 'axios';

const GetMenuProductQueryKey = 'product-menu/list';

export const GetProductMenu = async (
	transaction_id: string,
): Promise<Response<DataObj<GetProductMenuResponse>>> => {
	try {
		const response = await Get({
			endpoint: `/api/fnb-product-service/menu/get-product-list`,
			headers: {
				'X-Transaction-Uuid': transaction_id,
			},
		});

		return {
			code: response?.code,
			data: response?.data,
			message: response?.message,
			more_info: response?.more_info,
		};
	} catch (error) {
		const err = error as AxiosError;
		throw err.response?.data;
	}
};

export const useGetMenuProductQuery = (
	transaction_id: string,
	options?: UseQueryOptions<Response<DataObj<GetProductMenuResponse>>>,
) =>
	useQuery<Response<DataObj<GetProductMenuResponse>>>(
		[GetMenuProductQueryKey, JSON.stringify(transaction_id)],
		() => GetProductMenu(transaction_id),
		{
			refetchOnWindowFocus: false,
			...options,
		},
	);
