import CardMenuList from '@/molecules/card/menu/list';
import SectionListMenu from '@/molecules/section/list/menu';
import SectionListRecommendation from '@/molecules/section/list/recommendation';
import React from 'react';
import {useAppSelector} from 'store/hooks';

const OrganismsSectionList = () => {
	const {search} = useAppSelector(state => state.menu);
	const {filteredMenu: filteredData} = useAppSelector(state => state.menu);
	const {objs: data} = useAppSelector(state => state.product);

	return (
		<>
			{search.length > 0 && (
				<div>
					{filteredData.map(product => (
						<CardMenuList key={product.uuid} product={product} />
					))}
				</div>
			)}
			{search.length === 0 && (
				<div>
					<SectionListRecommendation data={data} />
					{data?.map(datas => (
						<SectionListMenu data={datas} key={datas.category_uuid} />
					))}
				</div>
			)}
		</>
	);
};

export default OrganismsSectionList;
