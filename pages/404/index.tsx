import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import NotFound from '@/molecules/not-found';
import NotFoundLayout from '@/organisms/layout/404-layout';
import {NextPageWithLayout} from '@/types/index';
import React from 'react';

const Page: NextPageWithLayout = () => {
	return (
		<>
			<MetaHeader
				title="Posy Resto - Not Found Page"
				description={SEO.description}
				keywords={SEO.keywords}
				image={SEO.image}
			/>
			<NotFound />
		</>
	);
};

Page.getLayout = page => <NotFoundLayout>{page}</NotFoundLayout>;

export default Page;
