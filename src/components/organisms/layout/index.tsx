import Transition from '@/atoms/animations/transition';
import {useQuery} from '@tanstack/react-query';
import {GetTransactionStatus} from 'core/data/transaction/sources/GetTransactionStatusQuery';
import {Response} from 'core/domain/vo/BaseResponse';
import {AnimatePresence} from 'framer-motion';
import {useRouter} from 'next/router';
import {BottomNavigation, Loading} from 'posy-fnb-core';
import React, {ReactNode, SyntheticEvent, useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import Bill from 'src/assets/icons/bill';
import Menu from 'src/assets/icons/menu';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {onResetRating} from 'store/slices/rating';

type OrganismsLayoutProps = {
	children: ReactNode;
};

const list = (transaction_uuid: string) => [
	{
		label: 'Order',
		value: `menu/${transaction_uuid}`,
		icon: Menu,
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
	const {isShowAddRating} = useAppSelector(state => state.rating);

	const {isLoading: isLoadingTransactionStatus} = useQuery(
		[router.pathname],
		async () => {
			const response = await GetTransactionStatus(transaction_uuid as string);
			const dataTransaction = response.data;

			return dataTransaction;
		},
		{
			enabled: !!transaction_uuid,
			onSuccess: data => {
				if (data.is_waiting_payment) {
					setTimeout(() => {
						setLoading(false);
					}, 500);
					router.push(`/payment/waiting/${transaction_uuid}`);
				} else if (data.is_paid && !isShowAddRating) {
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
			onError: (data: Response) => {
				setTimeout(() => {
					setLoading(false);
				}, 500);
				toast.error(data.more_info);
				return router.push(`/404`);
			},
		},
	);

	const handleChange = (e: SyntheticEvent, newValue: number) => {
		setValue(newValue);
		router.push(`/${list(transaction_uuid as string)[newValue].value}`);
	};

	useEffect(() => {
		const selected = list(transaction_uuid as string).findIndex(
			el => el.value === router.pathname.slice(1),
		);
		setValue(selected);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.pathname]);

	useEffect(() => {
		if (!transaction_uuid) {
			setLoading(false);
		}
	}, [router.pathname, transaction_uuid]);

	useEffect(() => {
		dispatch(onResetRating());
	}, []);

	if (loading) {
		return (
			<div className="flex h-screen items-center justify-center overflow-hidden">
				<Loading size={60} />
			</div>
		);
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
