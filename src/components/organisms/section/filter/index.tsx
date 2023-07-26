import InputSearch from '@/atoms/input/search';
import useShadowScroll from '@/hooks/shadow-scroll';
import useDisclosure from '@/hooks/useDisclosure';
import MoleculesSectionFilterCategory from '@/molecules/section/filter-category';
import React, {useMemo} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {onChangeSearch, onClearSearch} from 'store/slices/menu';
import {logEvent} from 'utils/UtilsAnalytics';

const OrganismsSectionFilter = () => {
	const {objs: menus} = useAppSelector(state => state.product);
	const dispatch = useAppDispatch();
	const {category} = useAppSelector(state => state.category);
	const shadow = useShadowScroll();

	const [openSearch, {open, close}] = useDisclosure({initialState: false});

	const onClear = () => {
		dispatch(onClearSearch());
		close();
	};

	const listCategories = useMemo(() => {
		const formatCategory = category?.map(cat => ({
			label: cat.category_name,
			value: cat.category_name.toLowerCase(),
		}));

		return [
			{
				label: 'All',
				value: 'all',
			},
			...formatCategory,
		];
	}, [category]);

	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		logEvent({category: 'homepage', action: 'homepage_searchresult_view'});
		dispatch(onChangeSearch({search: e.target.value, menus}));
	};

	return (
		<section
			style={{
				boxShadow: shadow ? '0px 6px 24px rgb(0 0 0 / 15%)' : 'none',
				transition: 'box-shadow 0.5s',
			}}
			className="sticky top-0 z-50 mt-2 flex gap-4 bg-white p-4"
		>
			<MoleculesSectionFilterCategory listCategories={listCategories} openSearch={openSearch} />
			<InputSearch isOpen={openSearch} open={open} onClearSearch={onClear} onSearch={onSearch} />
		</section>
	);
};

export default OrganismsSectionFilter;
