import {OrderStatusEnum} from 'core/data/order/types';

export const generateOrderStatus = (status: OrderStatusEnum) => {
	const statusColor = {
		ORDER_RECEIVED: '#003BD4',
		ORDER_PROCESS: '#f1c40f',
		ORDER_SERVED: '#37B175',
		ORDER_CANCELLED: '#CB3A31',
	};

	const statusText = {
		ORDER_RECEIVED: 'Received',
		ORDER_PROCESS: 'Process',
		ORDER_SERVED: 'Served',
		ORDER_CANCELLED: 'Cancelled',
	};

	return <p style={{color: statusColor[status]}}>{statusText[status]}</p>;
};
