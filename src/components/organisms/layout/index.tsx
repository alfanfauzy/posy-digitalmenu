import Transition from '@/atoms/animations/transition';
import {Loading} from '@/atoms/loading';
import {useQuery} from '@tanstack/react-query';
import {GetTransactionStatus} from 'core/data/transaction/sources/GetDetailTransactionStatusQuery';
import {AnimatePresence} from 'framer-motion';
import {useRouter} from 'next/router';
import {BottomNavigation} from 'posy-fnb-core';
import React, {ReactNode, useEffect, useState} from 'react';
import {Bell} from 'src/assets/icons/bell';
import Bill from 'src/assets/icons/bill';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {onChangeTransactionId} from 'store/slices/transaction';

type OrganismsLayoutProps = {
	children: ReactNode;
};

const list = (transaction_uuid: string) => [
	{
		label: 'Menu',
		value: `menu/${transaction_uuid}`,
		icon: Bell,
	},
	{
		label: 'Bill',
		value: `bill/${transaction_uuid}`,
		icon: Bill,
	},
];
const showBottomNavigationRoutes = [
	'/menu/[transaction_uuid]',
	'/basket/[transaction_uuid]',
	'/bill/[transaction_uuid]',
];

const OrganismsLayout: React.FC<OrganismsLayoutProps> = ({children}) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const {transaction_uuid} = router.query;
	const [value, setValue] = useState(0);
	const [loading, setLoading] = useState(true);

	const {data: transactionStatus} = useQuery(
		[router.pathname],
		async () => {
			const response = await GetTransactionStatus(transaction_uuid as string);
			const dataTransaction = await response.data;
			return dataTransaction;
		},
		{
			onSuccess: data => {
				if (data === null) {
					setTimeout(() => {
						setLoading(false);
					}, 500);
					dispatch(onChangeTransactionId(''));
					router.push(`/404`);
					return;
				}

				if (!data.is_open && data.is_paid) {
					setTimeout(() => {
						setLoading(false);
					}, 500);
					router.push(`/payment/completed/${transaction_uuid}`);
				} else {
					setTimeout(() => {
						setLoading(false);
					}, 500);
				}
			},
		},
	);

	const handleChange = (e: any, newValue: number) => {
		setValue(newValue);
		router.push(`/${list(transaction_uuid as string)[newValue].value}`);
	};

	useEffect(() => {
		const selected = list(transaction_uuid as string).findIndex(
			el => el.value === router.pathname.slice(1),
		);
		setValue(selected);
	}, [router.pathname]);

	if (loading) {
		return <Loading size={50} />;
	}

	return (
		<AnimatePresence initial={false}>
			<Transition>
				{children}
				{showBottomNavigationRoutes.includes(router.pathname) && (
					<div className="fixed bottom-0 z-10 w-full max-w-[576px]">
						<BottomNavigation
							list={list(transaction_uuid as string)}
							onChange={handleChange}
							value={value}
						/>
					</div>
				)}
			</Transition>
		</AnimatePresence>
	);
};

export default OrganismsLayout;
