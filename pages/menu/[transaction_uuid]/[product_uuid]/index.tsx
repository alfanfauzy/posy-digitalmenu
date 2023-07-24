import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import {useGetMenuProductDetailViewModel} from '@/view/product/view-models/GetMenuProductDetailViewModel';
import ContainerMenuDetail from 'containers/menu/menu-detail';
import {useRouter} from 'next/router';
import {useAppDispatch} from 'store/hooks';
import {setProductDetail} from 'store/slices/product';

const Page = () => {
	const dispatch = useAppDispatch();
	const {query} = useRouter();
	const {transaction_uuid, product_uuid} = query;

	useGetMenuProductDetailViewModel(
		{transaction_uuid: transaction_uuid as string, product_uuid: product_uuid as string},
		{
			onSuccess(data) {
				dispatch(setProductDetail(data.data));
			},
		},
	);

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

export default Page;
