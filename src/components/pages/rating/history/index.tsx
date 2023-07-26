import {PayloadGetRatingByProduct} from '@/domain/rating/repositories/GetRatingsByProductRepository';
import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import {useGetRatingsByProductViewModel} from '@/view/rating/view-modals/GetRatingsByProductViewModels';
import {Rate} from 'antd';
import {useRouter} from 'next/router';
import React from 'react';
import {dateFormatter} from 'utils/dateFormatter';

const PagesRatingHistory = () => {
	const {query, push} = useRouter();
	const {transaction_uuid, product_uuid} = query;

	const payload: PayloadGetRatingByProduct = {
		transaction_uuid: transaction_uuid as string,
		param: {
			limit: 100,
			page: 1,
			search: [{field: 'product_uuid', value: product_uuid as string}],
			sort: {field: 'created_at', value: 'asc'},
		},
	};

	const {data: ratingHistory} = useGetRatingsByProductViewModel(payload, {
		enabled: !!transaction_uuid,
	});

	const handleGoBack = () => {
		push(`/menu/${transaction_uuid}/${product_uuid}`);
	};

	return (
		<main className="mx-auto min-h-screen py-4 px-5 shadow-md">
			<MoleculesHeaderNavigation text="Foods Ratings" isWithIcon goBack={handleGoBack} />

			{ratingHistory?.map(data => (
				<aside
					className="mt-4 mb-6 p-4 border rounded-2xl border-neutral-40 shadow-sm flex flex-col gap-6 overflow-x-auto"
					key={data.food_rating_uuid}
				>
					<div className="border-b-2 pb-4 gap-1">
						<h3 className="text-l-bold">{data.customer_name}</h3>
						<p className="text-m-medium">Order on {dateFormatter(data.date, 'dd MMM yyyy')}</p>
					</div>
					<div className="flex justify-between flex-col gap-1 pb-4 border-b-2">
						<h3 className="text-l-bol">Rating</h3>
						<Rate disabled className="text-heading-s-bold" defaultValue={data.rating} />
					</div>
					{data.review && (
						<div className="flex justify-between flex-col gap-1 pb-4 border-b-2">
							<h3 className="text-l-bol">Notes</h3>
							<p>{data.review.join(', ')}</p>
						</div>
					)}
				</aside>
			))}
		</main>
	);
};

export default PagesRatingHistory;
