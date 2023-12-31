/**
 *
 * PagesMenu
 *
 */
import HeaderOutletInfo from '@/molecules/header/outlet-info';
import SectionFilter from '@/organisms/section/filter';
import SectionList from '@/organisms/section/list';
import dynamic from 'next/dynamic';
import React from 'react';
import {useAppSelector} from 'store/hooks';

const FloatingButton = dynamic(() => import('@/atoms/button/float'), {ssr: false});

const PagesMenu: React.FC = () => {
	const {basket} = useAppSelector(state => state.basket);

	return (
		<main className="mx-auto min-h-screen pt-4 pb-28 shadow-md">
			<HeaderOutletInfo />
			<SectionFilter />
			<SectionList />
			{basket.length > 0 && <FloatingButton />}
		</main>
	);
};

export default PagesMenu;
