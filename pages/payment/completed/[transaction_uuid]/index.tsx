import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import {dehydrate, QueryClient, useQuery} from '@tanstack/react-query';
import ContainerPaymentCompleted from 'containers/payment/completed';
import {GetPaymentCompleted} from 'core/data/payment/sources/GetPaymentCompletedQuery';
import {GetServerSideProps} from 'next';
import React from 'react';

type PaymentCompletedPageProps = {
	transaction_uuid: string;
};

const Page = ({transaction_uuid}: PaymentCompletedPageProps) => {
	// Use useQuery hook to fetch data client-side
	const {data: paymentCompleted} = useQuery(['payment/completed'], async () => {
		const response = await GetPaymentCompleted(transaction_uuid);
		const dataPaymentCompleted = await response.data;
		return dataPaymentCompleted;
	});

	return (
		<>
			<MetaHeader
				title="Posy Resto - Payment Completed"
				description={SEO.description}
				keywords={SEO.keywords}
				image={SEO.image}
			/>
			<ContainerPaymentCompleted paymentCompleted={paymentCompleted} />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
	const transaction_uuid = query.transaction_uuid as string;

	const fetchPaymentCompleted = async () => {
		const response = await GetPaymentCompleted(transaction_uuid);
		const dataPaymentCompleted = await response.data;
		return dataPaymentCompleted;
	};

	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(['payment/completed'], fetchPaymentCompleted);

	const dehydratedState = dehydrate(queryClient);

	return {
		props: {
			transaction_uuid,
			dehydratedState,
		},
	};
};

export default Page;
