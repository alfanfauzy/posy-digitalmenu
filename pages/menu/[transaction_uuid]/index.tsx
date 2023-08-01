import {SEO} from '@/constants/seo';
import {ErrorType} from '@/domain/vo/BaseError';
import MetaHeader from '@/molecules/meta-header';
import {useGetMenuProductsViewModel} from '@/view/product/view-models/GetMenuProductsViewModel';
import {useQuery} from '@tanstack/react-query';
import ContainerMenu from 'containers/menu';
import {GetCategory} from 'core/data/category/sources/GetCategoryQuery';
import {GetOutletDetail} from 'core/data/outlet/sources/GetOutletDetailQuery';
import {useRouter} from 'next/router';
import {Loading} from 'posy-fnb-core';
import {useEffect} from 'react';
import {toast} from 'react-toastify';
import {useAppDispatch} from 'store/hooks';
import {onChangeCategoryList} from 'store/slices/category';
import {onChangeOutletDetail} from 'store/slices/outlet';
import {onChangeProductMenu} from 'store/slices/product';
import {logEvent} from 'utils/UtilsAnalytics';
import {capitalizeFirstLetter} from 'utils/UtilsCapitalizeLetter';

const Page = () => {
	const {query, push} = useRouter();
	const {transaction_uuid} = query;
	const dispatch = useAppDispatch();

	const {isLoading: isLoadingCategory} = useQuery(
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
			onError: (data: ErrorType) => {
				toast.error(capitalizeFirstLetter(data.more_info));
				if (data.code === 4211) {
					return push(`/404`);
				}
			},
			enabled: !!transaction_uuid,
		},
	);

	const {isLoading: isLoadingProduct} = useGetMenuProductsViewModel(transaction_uuid as string, {
		onSuccess: data => {
			if (data) dispatch(onChangeProductMenu(data.data?.objs));
		},
		enabled: !!transaction_uuid,
	});

	const {isLoading: isLoadingOutlet} = useQuery(
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

	useEffect(() => {
		logEvent({category: 'homepage', action: 'homepage_view'});
	}, []);

	if (isLoadingCategory || isLoadingProduct || isLoadingOutlet) {
		return (
			<div className="flex h-screen items-center justify-center overflow-hidden">
				<Loading size={60} />
			</div>
		);
	}

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
