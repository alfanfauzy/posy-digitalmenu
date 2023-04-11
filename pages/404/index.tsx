import {SEO} from '@/constants/seo';
import MoleculesMetaHeader from '@/molecules/meta-header';
import React from 'react';

const Page = () => (
	<>
		<MoleculesMetaHeader
			title="Posy Resto - 404 Page"
			description={SEO.description}
			keywords={SEO.keywords}
			image={SEO.image}
		/>
		<main className="container min-h-screen pt-4 pb-40 shadow-md text-center mx-auto my-auto align-middle">
			<p className="text-xxl-regular underline">404 Page Not Found</p>
		</main>
	</>
);

export default Page;
