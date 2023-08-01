import {ProductMenuDetail} from '@/domain/product/models/ProductMenuDetail';
import SectionAddToBasket from '@/molecules/section/add-to-basket';
import SectionQuantityCounter from '@/molecules/section/quantity-counter';
import React from 'react';

type OrganismsBottomBarItemQuantityProps = {
	product: ProductMenuDetail;
};

const OrganismsBottomBarItemQuantity = ({product}: OrganismsBottomBarItemQuantityProps) => (
	<section
		style={{
			boxShadow: '0px -6px 24px rgb(0 0 0 / 10%)',
		}}
		className="fixed bottom-0 z-20 -ml-4 w-full max-w-[576px] rounded-t-2xl bg-neutral-10 px-4 pb-6 pt-8"
	>
		<SectionQuantityCounter />
		<SectionAddToBasket product={product} />
	</section>
);

export default OrganismsBottomBarItemQuantity;
