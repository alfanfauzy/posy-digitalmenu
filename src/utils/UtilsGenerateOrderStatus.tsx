import {OrderStatusEnum} from 'core/data/order/types';

export const generateOrderStatus = (status: OrderStatusEnum) => {
	const statusColor = {
		ORDER_RECEIVED: 'text-blue-success',
		ORDER_PROCESS: 'text-yellow-500',
		ORDER_SERVED: 'text-green-success',
		ORDER_CANCELLED: 'text-red-accent',
	};

	const statusText = {
		ORDER_RECEIVED: 'Received',
		ORDER_PROCESS: 'Process',
		ORDER_SERVED: 'Served',
		ORDER_CANCELLED: 'Cancelled',
	};

	return <p className={`text-l-reguler ${statusColor[status]}`}>{statusText[status]}</p>;
};
