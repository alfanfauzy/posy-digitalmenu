import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import ContainerPendingPayment from 'containers/payment/pending';
import React from 'react';

const Page = () => {
	return (
		<>
			<MetaHeader
				title="Posy Resto - Pending Payment Payment"
				description={SEO.description}
				keywords={SEO.keywords}
				image={SEO.image}
			/>
			<ContainerPendingPayment />
		</>
	);
};

export default Page;
