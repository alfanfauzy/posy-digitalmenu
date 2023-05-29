/* eslint-disable @typescript-eslint/naming-convention */
import {OrderStatus, OrderDetailStatus} from 'core/domain/order/models';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BsCheckCircleFill} from 'react-icons/bs';
import {MdSoupKitchen} from 'react-icons/md';
import {TfiReload} from 'react-icons/tfi';

export const generateStatusOrder = (status: OrderStatus) => {
	const statusColor = {
		0: 'text-blue-success',
		1: 'text-secondary-main',
		2: 'text-warning-main',
		3: 'text-green-success',
		4: 'text-red-caution',
	};

	const statusText = {
		0: 'Not selected',
		1: 'Processing',
		2: 'On kitchen',
		3: 'Served',
		4: 'Cancelled',
	};

	const icon = {
		0: <AiOutlineInfoCircle />,
		1: <TfiReload />,
		2: <MdSoupKitchen />,
		3: <BsCheckCircleFill />,
		4: <AiOutlineInfoCircle />,
	};

	return (
		<p className={`flex gap-2 items-center text-m-medium ${statusColor[status]}`}>
			{icon[status]}
			{statusText[status]}
		</p>
	);
};

export const generateStatusOrderDetail = (status: OrderDetailStatus) => {
	const statusColor = {
		0: 'text-blue-success',
		1: 'text-secondary-main',
		2: 'text-warning-main',
		3: 'text-green-success',
		4: 'text-red-caution',
	};

	const statusText = {
		0: 'Not selected',
		1: 'Processing',
		2: 'On kitchen',
		3: 'Served',
		4: 'Cancelled',
	};

	const icon = {
		0: <AiOutlineInfoCircle />,
		1: <TfiReload />,
		2: <MdSoupKitchen />,
		3: <BsCheckCircleFill />,
		4: <AiOutlineInfoCircle />,
	};

	return (
		<p className={`flex gap-2 items-center ${statusColor[status]}`}>
			{icon[status]}
			{statusText[status]}
		</p>
	);
};
