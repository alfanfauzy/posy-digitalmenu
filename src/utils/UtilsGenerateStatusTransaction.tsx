import {OrderDetailStatusEnum} from 'core/data/order/types';

export const generateOrderDetailStatus = (status: OrderDetailStatusEnum) => {
	const statusColor = {
		RECEIVED: '#003BD4',
		PROCESS: '#f1c40f',
		SERVED: '#37B175',
		CANCEL: '#CB3A31',
	};

	const statusText = {
		RECEIVED: 'Order Received',
		PROCESS: 'Order Process',
		SERVED: 'Order Served',
		CANCEL: 'Order Cancelled',
	};

	return (
		<p
			style={{
				color: statusColor[status],
			}}
			className={`text-m-semibold ${statusColor[status]}`}
		>
			{statusText[status]}
		</p>
	);
};
