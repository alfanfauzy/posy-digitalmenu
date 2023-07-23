import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import ContainerRatingAddSucessfull from 'containers/rating/completed';

const Page = () => (
	<>
		<MetaHeader
			title="Posy Resto - Success Add Rating"
			description={SEO.description}
			keywords={SEO.keywords}
			image={SEO.image}
		/>
		<ContainerRatingAddSucessfull />
	</>
);

export default Page;
