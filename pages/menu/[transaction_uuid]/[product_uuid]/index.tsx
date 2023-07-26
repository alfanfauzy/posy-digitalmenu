import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import {dehydrate, QueryClient, useQuery} from '@tanstack/react-query';
import ContainerMenuDetail from 'containers/menu/menu-detail';
import {GetProductDetail} from 'core/data/product/sources/GetProductMenuDetailQuery';
import {GetServerSideProps} from 'next';
import {useEffect} from 'react';
import {useAppDispatch} from 'store/hooks';
import {setProductDetail} from 'store/slices/product';
import {logEvent} from 'utils/UtilsAnalytics';

type PageDetailProps = {
	transaction_uuid: string;
	product_uuid: string;
};

const Page = ({transaction_uuid, product_uuid}: PageDetailProps) => {
	const dispatch = useAppDispatch();

	// Use useQuery hook to fetch data client-side
	const {data: productDetail} = useQuery(['product/detail', product_uuid], async () => {
		const response = await GetProductDetail({
			transaction_uuid,
			product_uuid,
		});
		const dataProductDetail = await response.data;
		return dataProductDetail;
	});

	useEffect(() => {
		if (productDetail) {
			dispatch(setProductDetail(productDetail));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productDetail]);

	useEffect(() => {
		logEvent({category: 'menu_detail', action: 'menudetails_view'});
	}, []);

	return (
		<>
			<MetaHeader
				title={SEO.title}
				description={SEO.description}
				keywords={SEO.keywords}
				image={SEO.image}
			/>
			<ContainerMenuDetail />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
	const product_uuid = query.product_uuid as string;
	const transaction_uuid = query.transaction_uuid as string;

	const fetchDetailProduct = async () => {
		const response = await GetProductDetail({
			transaction_uuid,
			product_uuid,
		});
		const dataCategory = await response.data;
		return dataCategory;
	};

	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(['product/detail', product_uuid], fetchDetailProduct);

	const dehydratedState = dehydrate(queryClient);

	return {
		props: {
			transaction_uuid,
			product_uuid,
			dehydratedState,
		},
	};
};

export default Page;
