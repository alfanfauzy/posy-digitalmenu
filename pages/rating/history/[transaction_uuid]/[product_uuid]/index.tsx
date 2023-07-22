import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import ContainerRatingHistory from 'containers/rating/history';

const Page = () => (
	<>
		<MetaHeader
			title="Posy Resto - Rating History"
			description={SEO.description}
			keywords={SEO.keywords}
			image={SEO.image}
		/>
		<ContainerRatingHistory />
	</>
);

export default Page;
