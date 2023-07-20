import {GetCategoryListResponse} from '@/data/category/types';
import {Response} from '@/domain/vo/BaseResponse';
import {UseQueryOptions, useQuery} from '@tanstack/react-query';
import Get from 'api/get';
import {AxiosError} from 'axios';

const GetCategoryKey = 'product-category/list';

export const GetCategory = async (
	transaction_id: string,
): Promise<Response<Array<GetCategoryListResponse>>> => {
	try {
		const response = await Get({
			endpoint: `/api/fnb-product-service/menu/get-category-list`,
			headers: {'X-Transaction-Uuid': transaction_id},
		});

		return response;
	} catch (error) {
		const err = error as AxiosError;
		throw err.response?.data;
	}
};

export const useGetCategoriesQuery = (
	transaction_id: string,
	options?: UseQueryOptions<Response<Array<GetCategoryListResponse>>>,
) =>
	useQuery<Response<Array<GetCategoryListResponse>>>(
		[GetCategoryKey, JSON.stringify(transaction_id)],
		() => GetCategory(transaction_id),
		{
			refetchOnWindowFocus: false,
			...options,
		},
	);
