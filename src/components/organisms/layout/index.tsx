/* eslint-disable @typescript-eslint/naming-convention */
import Transition from '@/atoms/animations/transition';
import {useGetGeneralSettingsViewModel} from '@/view/outlet/GetGeneralSettingsViewModel';
import {useQuery} from '@tanstack/react-query';
import {GetTransactionStatus} from 'core/data/transaction/sources/GetTransactionStatusQuery';
import {AnimatePresence} from 'framer-motion';
import {useRouter} from 'next/router';
import {BottomNavigation, Loading} from 'posy-fnb-core';
import React, {ReactNode, SyntheticEvent, useEffect, useState} from 'react';
import Bill from 'src/assets/icons/bill';
import Menu from 'src/assets/icons/menu';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {onResetRating} from 'store/slices/rating';
import {logEvent} from 'utils/UtilsAnalytics';

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

	const {data: DataGeneralSettings, isLoading: loadGeneralSettings} =
		useGetGeneralSettingsViewModel(
			{
				'X-Transaction-Uuid': transaction_uuid as string,
			},
			{
				enabled: !!transaction_uuid,
				onSuccess: data => {
					if (!data.data.general_setting.use_digital_menu) {
						router.push(`/404`);
					}
				},
				onError: () => {
					router.push(`/404`);
				},
			},
		);

	useQuery(
		[router.pathname],
		async () => {
			const response = await GetTransactionStatus(transaction_uuid as string);
			const dataTransaction = response.data;

			return dataTransaction;
		},
		{
			enabled: !!(transaction_uuid && DataGeneralSettings?.use_digital_menu),
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
			onError: () => {
				setTimeout(() => {
					setLoading(false);
				}, 500);
				return router.push(`/404`);
			},
		},
	);

	const handleChange = (e: SyntheticEvent, newValue: number) => {
		switch (newValue) {
			case 1:
				logEvent({category: 'homepage', action: 'homepage_bill_click'});
				break;

			default:
				logEvent({category: 'homepage', action: 'homepage_order_click'});
				break;
		}
		setValue(newValue);
		router.push(`/${list(transaction_uuid as string)[newValue].value}`);
	};

	useEffect(() => {
		const selected = list(transaction_uuid as string).findIndex(
			el => el.value === router.pathname.slice(1),
		);
		setValue(selected);
	}, [router.pathname, transaction_uuid]);

	useEffect(() => {
		if (!transaction_uuid) {
			setLoading(false);
		}
	}, [router.pathname, transaction_uuid]);

	useEffect(() => {
		dispatch(onResetRating());
	}, [dispatch]);

	if (loading || loadGeneralSettings) {
		return (
			<div className="flex h-screen items-center justify-center overflow-hidden">
				<Loading size={75} />
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
