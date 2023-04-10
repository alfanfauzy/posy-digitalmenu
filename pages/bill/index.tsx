import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import {dehydrate, QueryClient, useQuery} from '@tanstack/react-query';
import ContainerBill from 'containers/bill';
import {GetOrderDetail} from 'core/data/order/sources/GetOrderDetailQuery';
import {GetTransactionDetail} from 'core/data/transaction/sources/GetDetailTransactionQuery';
import {GetServerSideProps} from 'next';

type BillPageProps = {
	transaction_uuid: string;
};

const Page = ({transaction_uuid}: BillPageProps) => {
	// Use useQuery hook to fetch data client-side
	const {data: orderDetail, isLoading: isLoadingOrderDetail} = useQuery(
		['order/detail'],
		async () => {
			const response = await GetOrderDetail(transaction_uuid);
			const dataOrder = await response.data.objs;
			return dataOrder;
		},
	);

	const {data: transactionDetail, isLoading: isLoadingTransactionDetail} = useQuery(
		['transaction/detail'],
		async () => {
			const response = await GetTransactionDetail(transaction_uuid);
			const dataTransaction = await response.data;
			return dataTransaction;
		},
	);

	return (
		<>
			<MetaHeader
				title="Posy Resto - Bill"
				description={SEO.description}
				keywords={SEO.keywords}
				image={SEO.image}
			/>
			<ContainerBill
				orderDetail={orderDetail}
				isLoadingOrderDetail={isLoadingOrderDetail}
				transactionDetail={transactionDetail}
				isLoadingTransactionDetail={isLoadingTransactionDetail}
			/>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
	const transaction_uuid = query.transaction_uuid as string;

	const fetchDetailOrder = async () => {
		const response = await GetOrderDetail(transaction_uuid);
		const dataOrder = response.data?.objs;
		return dataOrder;
	};

	const fetchDetailTransaction = async () => {
		const response = await GetTransactionDetail(transaction_uuid);
		const dataOrder = response.data;
		return dataOrder;
	};

	const queryClient = new QueryClient();

	// Fetch both queries in parallel
	const [order, transaction] = await Promise.all([fetchDetailOrder(), fetchDetailTransaction()]);

	// Prefetch both queries in the queryClient
	queryClient.prefetchQuery(['order/detail'], () => order);
	queryClient.prefetchQuery(['transaction/detail'], () => transaction);

	const dehydratedState = dehydrate(queryClient);

	return {
		props: {
			transaction_uuid,
			dehydratedState,
		},
	};
};

export default Page;
