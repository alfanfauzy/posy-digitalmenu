/* eslint-disable react-hooks/exhaustive-deps */
import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import {useGetMenuProductsViewModel} from '@/view/product/view-modals/GetMenuProductsViewModel';
import {useQuery} from '@tanstack/react-query';
import ContainerMenu from 'containers/menu';
import {GetCategory} from 'core/data/category/sources/GetCategoryQuery';
import {GetOutletDetail} from 'core/data/outlet/sources/GetOutletDetailQuery';
import {useRouter} from 'next/router';
import {useAppDispatch} from 'store/hooks';
import {onChangeCategoryList} from 'store/slices/category';
import {onChangeOutletDetail} from 'store/slices/outlet';
import {onChangeProductMenu} from 'store/slices/product';

const Page = () => {
	const {query} = useRouter();
	const {transaction_uuid} = query;
	const dispatch = useAppDispatch();

	// Use useQuery hook to fetch data client-side
	useQuery(
		['category/list'],
		async () => {
			const response = await GetCategory(transaction_uuid as string);
			const getResponseCategory = response.data;
			return getResponseCategory;
		},
		{
			onSuccess: data => {
				if (data) dispatch(onChangeCategoryList(data));
			},
			enabled: !!transaction_uuid,
		},
	);

	useGetMenuProductsViewModel(transaction_uuid as string, {
		onSuccess: data => {
			if (data) dispatch(onChangeProductMenu(data.data.objs));
		},
		enabled: !!transaction_uuid,
	});

	useQuery(
		['outlet/detail'],
		async () => {
			const response = await GetOutletDetail(transaction_uuid as string);
			const dataOutletDetail = response.data;
			return dataOutletDetail;
		},
		{
			onSuccess: data => {
				if (data) dispatch(onChangeOutletDetail(data));
			},
			enabled: !!transaction_uuid,
		},
	);

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

export default Page;
