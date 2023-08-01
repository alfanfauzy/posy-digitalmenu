import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import ContainerAddRating from 'containers/rating/add';

const Page = () => (
	<>
		<MetaHeader
			title="Posy Resto - Add Rating"
			description={SEO.description}
			keywords={SEO.keywords}
			image={SEO.image}
		/>
		<ContainerAddRating />
	</>
);

export default Page;
