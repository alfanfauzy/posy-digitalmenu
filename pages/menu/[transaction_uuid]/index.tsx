/* eslint-disable react-hooks/exhaustive-deps */
import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import {dehydrate, QueryClient, useQuery} from '@tanstack/react-query';
import ContainerMenu from 'containers/menu';
import {GetCategory} from 'core/data/category/sources/GetCategoryQuery';
import {GetOutletDetail} from 'core/data/outlet/sources/GetOutletDetailQuery';
import {GetProductMenu} from 'core/data/product/sources/GetProductMenuQuery';
import {GetServerSideProps} from 'next';
import {useEffect} from 'react';
import {useAppDispatch} from 'store/hooks';
import {onChangeCategoryList} from 'store/slices/category';
import {onChangeOutletDetail} from 'store/slices/outlet';
import {onChangeProductMenu} from 'store/slices/product';
import {logEvent} from 'utils/UtilsAnalytics';

type PageProps = {
	transaction_uuid: string;
};

const Page = ({transaction_uuid}: PageProps) => {
	const dispatch = useAppDispatch();

	// Use useQuery hook to fetch data client-side
	useQuery(
		['category/list'],
		async () => {
			const response = await GetCategory(transaction_uuid);
			const getResponseCategory = response.data;
			return getResponseCategory;
		},
		{
			onSuccess: data => {
				if (data) dispatch(onChangeCategoryList(data));
			},
		},
	);

	useQuery(
		['product/list'],
		async () => {
			const response = await GetProductMenu(transaction_uuid);
			const getResponseProduct = response.data.objs;
			return getResponseProduct;
		},
		{
			onSuccess: data => {
				if (data) dispatch(onChangeProductMenu(data));
			},
		},
	);

	useQuery(
		['outlet/detail'],
		async () => {
			const response = await GetOutletDetail(transaction_uuid);
			const dataOutletDetail = response.data;
			return dataOutletDetail;
		},
		{
			onSuccess: data => {
				if (data) dispatch(onChangeOutletDetail(data));
			},
		},
	);

	useEffect(() => {
		logEvent({category: 'homepage', action: 'homepage_view'});
	}, []);

	return (
		<>
			<MetaHeader
				title="Posy Resto - Menu"
				description={SEO.description}
				keywords={SEO.keywords}
				image={SEO.image}
			/>
			<ContainerMenu />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
	const queryClient = new QueryClient();
	const transaction_uuid = query.transaction_uuid as string;

	const fetchCategory = async () => {
		const response = await GetCategory(transaction_uuid);
		const dataCategory = response.data;
		return dataCategory;
	};

	const fetchProduct = async () => {
		const response = await GetProductMenu(transaction_uuid);
		const dataProduct = response.data;
		return dataProduct;
	};

	const fetchOutletDetail = async () => {
		const response = await GetOutletDetail(transaction_uuid);
		const dataOutletDetail = response.data;
		return dataOutletDetail;
	};

	// Fetch both queries in parallel
	const [category, product, outlet] = await Promise.all([
		fetchCategory(),
		fetchProduct(),
		fetchOutletDetail(),
	]);

	// Prefetch both queries in the queryClient
	queryClient.prefetchQuery(['category/list'], () => category);
	queryClient.prefetchQuery(['product/list'], () => product);
	queryClient.prefetchQuery(['outlet/detail'], () => outlet);

	// Dehydrate the queryClient state
	const dehydratedState = dehydrate(queryClient);

	return {
		props: {
			transaction_uuid,
			dehydratedState,
		},
	};
};

export default Page;
