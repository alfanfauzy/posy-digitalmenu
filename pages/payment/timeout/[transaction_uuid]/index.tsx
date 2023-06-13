import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import ContainerTimeoutPayment from 'containers/payment/timeout';
import React from 'react';

const Page = () => {
	return (
		<>
			<MetaHeader
				title="Posy Resto - Time Out Payment Payment"
				description={SEO.description}
				keywords={SEO.keywords}
				image={SEO.image}
			/>
			<ContainerTimeoutPayment />
		</>
	);
};

export default Page;
