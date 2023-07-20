/* eslint-disable react-hooks/exhaustive-deps */
import CardMenuList from '@/molecules/card/menu/list';
import {ProductMenu} from 'core/domain/product/models';
import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import {useAppDispatch} from 'store/hooks';
import {onChangeCategory} from 'store/slices/menu';

type MoleculesSectionListMenuProps = {
	data: ProductMenu;
};

const MoleculesSectionListMenu = ({data}: MoleculesSectionListMenuProps) => {
	const {ref, entry, inView} = useInView({root: null, rootMargin: '0px', threshold: 0.9});
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (inView && entry?.target) {
			const {id} = entry.target;
			dispatch(
				onChangeCategory({
					value: id,
					label: id.charAt(0).toUpperCase() + id.slice(1),
				}),
			);
		}
	}, [inView]);

	return (
		<section
			ref={ref}
			key={data.category_name}
			className="mt-6"
			id={data.category_name?.toLowerCase()}
		>
			<aside className="mb-2 px-4">
				<p className="text-xxl-semibold">{data.category_name}</p>
			</aside>
			{data.products.map(product => (
				<CardMenuList key={product.product_name} product={product} />
			))}
		</section>
	);
};

export default MoleculesSectionListMenu;
