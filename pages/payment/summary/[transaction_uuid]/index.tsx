import {SEO} from '@/constants/seo';
import MetaHeader from '@/molecules/meta-header';
import {dehydrate, QueryClient, useQuery} from '@tanstack/react-query';
import ContainerPaymentSummary from 'containers/payment/summary';
import {GetPaymentSummary} from 'core/data/payment/sources/GetPaymentSummaryQuery';
import {GetServerSideProps} from 'next';
import React from 'react';

type SummaryPageProps = {
	transaction_uuid: string;
};

const Page = ({transaction_uuid}: SummaryPageProps) => {
	// Use useQuery hook to fetch data client-side
	const {data: paymentSummary} = useQuery(['payment/summary'], async () => {
		const response = await GetPaymentSummary(transaction_uuid);
		const dataOrder = await response.data;
		return dataOrder;
	});

	return (
		<>
			<MetaHeader
				title="Posy Resto - Payment Summary"
				description={SEO.description}
				keywords={SEO.keywords}
				image={SEO.image}
			/>
			<ContainerPaymentSummary paymentSummary={paymentSummary} />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
	const transaction_uuid = query.transaction_uuid as string;

	const fetchPaymentSummary = async () => {
		const response = await GetPaymentSummary(transaction_uuid);
		const dataOrder = await response.data;
		return dataOrder;
	};

	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(['payment/summary'], fetchPaymentSummary);

	const dehydratedState = dehydrate(queryClient);

	return {
		props: {
			transaction_uuid,
			dehydratedState,
		},
	};
};

export default Page;
