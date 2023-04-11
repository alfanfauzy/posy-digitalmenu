/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
import MoleculesCardMenuRecommendation from '@/molecules/card/menu/recommendation';
import {ProductMenu, Products} from 'core/domain/product/models';
import React, {useEffect, useState} from 'react';

type MoleculesSectionListRecommendationProps = {
	data: Array<ProductMenu>;
};

const MoleculesSectionListRecommendation = ({data}: MoleculesSectionListRecommendationProps) => {
	const [recommendProduct, setRecommendProduct] = useState<Products>([]);

	const getRecommendProduct = () => {
		const temp: Products = [];

		data
			?.map(prod => prod)
			.filter(pro =>
				pro.products.map(prods => {
					if (prods.is_favourite) {
						temp.push(prods);
					}
				}),
			);

		setRecommendProduct(temp);
	};

	useEffect(() => {
		getRecommendProduct();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<section>
			<aside className="mt-4 px-4" id="all">
				<p className="text-xxl-semibold">Our Recommendation</p>
			</aside>
			<article className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 px-4">
				{recommendProduct.map((product, idx) => (
					<MoleculesCardMenuRecommendation data={product} key={idx} />
				))}
			</article>
		</section>
	);
};

export default MoleculesSectionListRecommendation;
