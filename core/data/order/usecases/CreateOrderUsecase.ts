import {OrderParam} from 'core/domain/order/models';
import {MutationOptions} from 'core/domain/vo/BaseMutation';

import {useCreateOrderMutation} from '../sources/CreateOrderMutation';
import {CreateOrderResponse} from '../types';

export const useCreateOrderUsecase = (options: MutationOptions<CreateOrderResponse>): any => {
	const {mutate, data, ...rest} = useCreateOrderMutation(options);

	const createOrder = (payload: OrderParam) => {
		mutate(payload);
	};

	return {
		createOrder,
		data: data?.data,
		...rest,
	};
};
