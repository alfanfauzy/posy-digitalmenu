import {FilterInputVariables} from 'core/domain/vo/BaseInput';
import {Pagination} from 'core/domain/vo/BasePagination';
import {ResultMutation, ResultQuery} from 'core/domain/vo/BaseResponse';

import {PaymentMethodCategory, PaymentMethodCategorys, PaymentRequestPayload} from '../models';

/**
 * Get Payment Method Category List
 */

export type GetFilterPaymentMethodCategory = FilterInputVariables<
	'created_at',
	keyof Pick<PaymentMethodCategory, 'is_integration' | 'is_show'> | 'with_payment_method'
> & {restaurant_uuid?: string; transaction_uuid?: string};

export type PayloadPaymentCategory = {
	filter: GetFilterPaymentMethodCategory;
	transaction_uuid: string;
};

export type GetPaymentMethodCategorysResult = ResultQuery<PaymentMethodCategorys | undefined> & {
	pagination: Pagination | undefined;
};

export type GetPaymentMethodCategoryResult = ResultQuery<PaymentMethodCategory>;

/**
 * Create Payment Request
 */

export type CreatePaymentRequestResult = ResultMutation<undefined>;

export type CreatePaymentRequestRepository = {
	createPaymentRequest(params: PaymentRequestPayload): void;
} & CreatePaymentRequestResult;
