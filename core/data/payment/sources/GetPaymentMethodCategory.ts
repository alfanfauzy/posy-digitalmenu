import Post from 'api/post';
import {AxiosError} from 'axios';
import {
	GetFilterPaymentMethodCategory,
	PayloadPaymentCategory,
} from 'core/domain/payment/repositories/PaymentRepositories';
import {Response, Datalist} from 'core/domain/vo/BaseResponse';
import {useQuery, UseQueryOptions} from 'react-query';

import {GetPaymentMethodCategoryListResponse} from '../types/index';

export const GetPaymentMethodCategory = async (
	input: PayloadPaymentCategory,
): Promise<Response<Datalist<GetPaymentMethodCategoryListResponse>>> => {
	const {transaction_uuid, filter} = input;

	try {
		const response = await Post({
			endpoint: `/api/fnb-order-service/menu/payment/get-payment-method-list`,
			data: filter,
			headers: {
				'X-Transaction-Uuid': transaction_uuid,
			},
		});

		return response;
	} catch (error) {
		const err = error as AxiosError;
		throw err.response?.data;
	}
};

export const useGetPaymentMethodCategoryQuery = (
	input: PayloadPaymentCategory,
	options?: UseQueryOptions<Response<Datalist<GetPaymentMethodCategoryListResponse>>>,
) =>
	useQuery<Response<Datalist<GetPaymentMethodCategoryListResponse>>>(
		['payment-method-category/list', JSON.stringify(input)],
		() => GetPaymentMethodCategory(input),
		{
			enabled: !!JSON.stringify(input),
			...options,
		},
	);
