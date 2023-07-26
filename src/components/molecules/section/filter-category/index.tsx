/* eslint-disable react-hooks/exhaustive-deps */
import {Item} from 'core/domain/vo/BaseItem';
import {useRouter} from 'next/router';
import {DropdownMobile} from 'posy-fnb-core';
import React from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {onChangeCategory} from 'store/slices/menu';
import {logEvent} from 'utils/UtilsAnalytics';

type MoleculesSectionFilterCategoryProps = {
	listCategories: Array<Item>;
	openSearch: boolean;
};

const MoleculesSectionFilterCategory = ({
	listCategories,
	openSearch,
}: MoleculesSectionFilterCategoryProps) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const {category} = useAppSelector(state => state.menu);

	const onChange = (e: {label: string; value: string}) => {
		logEvent({category: 'homepage', action: 'homepage_filteredhomepage_view'});
		dispatch(onChangeCategory(e));
		router.push(`#${e.value}`);
	};

	return (
		<div
			className={`transition-all duration-500 ease-in-out ${
				openSearch ? 'w-0 opacity-0' : 'w-2/3 opacity-100'
			}`}
		>
			<DropdownMobile
				options={listCategories}
				value={category}
				onChange={onChange}
				fullWidth
				placeholder="Choose Category"
				dropdownTitle="Choose Category"
			/>
		</div>
	);
};

export default MoleculesSectionFilterCategory;
