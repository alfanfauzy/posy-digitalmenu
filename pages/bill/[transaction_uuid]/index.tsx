import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import ContainerBill from 'containers/bill';
import {useEffect} from 'react';
import {logEvent} from 'utils/UtilsAnalytics';

const Page = () => {
	useEffect(() => {
		logEvent({category: 'bill', action: 'bill_view'});
	}, []);

	return (
		<>
			<MetaHeader
				title="Posy Resto - Bill"
				description={SEO.description}
				keywords={SEO.keywords}
				image={SEO.image}
			/>
			<ContainerBill />
		</>
	);
};

export default Page;
