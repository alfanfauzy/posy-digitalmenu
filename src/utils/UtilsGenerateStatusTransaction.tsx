import {OrderDetailStatusEnum} from 'core/data/order/types';

export const generateOrderDetailStatus = (status: OrderDetailStatusEnum) => {
	const statusColor = {
		RECEIVED: 'text-blue-success',
		PROCESS: 'text-yellow-500',
		SERVED: 'text-green-success',
		CANCEL: 'text-red-accent',
	};

	const statusText = {
		RECEIVED: 'Order Received',
		PROCESS: 'Order Process',
		SERVED: 'Order Served',
		CANCEL: 'Order Cancelled',
	};

	return <p className={`text-m-semibold ${statusColor[status]}`}>{statusText[status]}</p>;
};
