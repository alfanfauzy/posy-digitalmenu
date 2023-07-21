import {useForm} from '@/hooks/useForm';
import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import OrganismsBottomBarRatingAdd from '@/organisms/bottom-bar/rating';
import {Rate} from 'antd';
import {CreateRatingPayload} from 'core/domain/rating/repositories/CreateRatingRepository';
import {useGetOrderListByRatingViewModel} from 'core/view/order/view-modals/GetOrderListByRatingViewModel';
import {useCreateRatingViewModal} from 'core/view/rating/CreateRatingViewModels';
import {useGetTransactionStatusViewModel} from 'core/view/transaction/view-modals/GetTransactionStatusViewModel';
import {useRouter} from 'next/router';
import {Button, Textarea} from 'posy-fnb-core';
import React, {useEffect} from 'react';
import {toast} from 'react-toastify';
import {validateAddRating} from 'src/common/schemas/rating/add';
import {useAppSelector} from 'store/hooks';

const goodAccomplishmentList = ['Good Taste', 'Good price', 'Good place', 'Good service'];
const badAccomplishmentList = ['Late order', 'Pricy', 'Different Picture', 'Wrong order'];

const PagesRatingAdd = () => {
	const {query, push} = useRouter();
	const {transaction_uuid} = query;
	const getRating = useAppSelector(state => state.rating.rating);

	const isGoodRate = getRating === 5;
	const textTitle = isGoodRate ? 'Share your compliments?' : 'What can be improved?';
	const listAccomplishment = isGoodRate ? goodAccomplishmentList : badAccomplishmentList;

	const {watch, setValue, getValues, reset} = useForm({
		mode: 'onChange',
		schema: validateAddRating,
		defaultValues: {
			rating: getRating,
			product_rating: [
				{
					rating: getRating,
				},
			],
		},
	});

	const {data: statusTransaction} = useGetTransactionStatusViewModel(transaction_uuid as string, {
		enabled: !!transaction_uuid,
	});

	const {data: orderDetail} = useGetOrderListByRatingViewModel(transaction_uuid as string, {
		enabled: !!transaction_uuid,
		onSuccess(data) {
			reset({
				rating: getRating,
				product_rating: data.data.order_detail.map(dataOrder => ({
					order_detail_uuid: dataOrder.uuid,
					rating: getRating,
				})),
			});
		},
	});

	const {createRating} = useCreateRatingViewModal({
		onSuccess() {
			toast.success('Succesfull save rating.');
			push(`/payment/completed/${transaction_uuid}`);
		},
		onError() {
			toast.error('Error save rating');
		},
	});

	const handleSelectComplishment = (value: string) => {
		const selectedAcc = getValues('review') ?? [];

		if (selectedAcc.includes(value)) {
			if (value === 'OTHERS') setValue('review_note', '');
			const filterSelected = selectedAcc.filter(item => item !== value);

			setValue('review', filterSelected);
		} else {
			const newSelected = [...selectedAcc, value];
			setValue('review', newSelected);
		}
	};

	const handleSubmitRating = () => {
		const payload = watch();

		const newPayload: CreateRatingPayload = {
			transaction_uuid: transaction_uuid as string,
			payload,
		};

		createRating(newPayload);
	};

	useEffect(() => {
		const isReviewed = statusTransaction?.is_reviewed;

		if (isReviewed) {
			push(`/payment/completed/${transaction_uuid}`);
		}
	}, [statusTransaction?.is_reviewed]);

	return (
		<main className="mx-auto min-h-screen pt-4 px-5 shadow-md">
			<MoleculesHeaderNavigation text="Foods Rating" isWithIcon={false} />

			<aside className="mt-4 mb-6 p-4 border rounded-2xl border-neutral-40 shadow-sm flex flex-col items-center gap-6">
				<span className="flex flex-col items-center gap-2">
					<h3 className="text-l-bold">How do you like our food/beverages?</h3>
					<h4 className="text-l-reguler">Rate your order</h4>
				</span>
				<Rate className="text-heading-s-bold" defaultValue={getRating} />
			</aside>

			<aside className="flex flex-col items-center gap-4">
				<h2 className="text-xxl-semibold text-center">{textTitle}</h2>
				<div className="grid grid-cols-2 gap-2 w-full">
					{listAccomplishment.map(data => (
						<Button
							className={
								watch('review')?.includes(data.toUpperCase().split(' ').join('_'))
									? 'border-2 border-secondary-main text-secondary-main'
									: ''
							}
							key={data.toLowerCase()}
							variant="secondary"
							onClick={() => handleSelectComplishment(data.toUpperCase().split(' ').join('_'))}
						>
							{data}
						</Button>
					))}
				</div>
				<Button
					variant="secondary"
					className={
						watch('review')?.includes('OTHERS')
							? 'border-2 border-secondary-main text-secondary-main w-fit'
							: 'w-fit'
					}
					onClick={() => handleSelectComplishment('OTHERS')}
				>
					Others
				</Button>
			</aside>

			<aside
				className={`overflow-hidden transition-[max-height] duration-500 ease-in ${
					watch('review')?.includes('OTHERS') ? 'max-h-52' : 'max-h-0'
				}`}
			>
				<section className="mt-4 mb-44">
					<Textarea
						className="h-32"
						labelText="Notes"
						fullwidth
						placeholder="I love it"
						helperText={`${watch('review_note')?.length || 0} / ${200}`}
						value={watch('review_note')}
						onChange={e => setValue('review_note', e.target.value)}
						maxLength={200}
					/>
				</section>
			</aside>

			<div className="mb-16 pb-10">
				<h3 className="text-xxl-semibold text-center pt-6">How’s the order</h3>

				{Array.isArray(orderDetail) &&
					orderDetail.map((order, index) => (
						<aside
							className="mt-4 mb-6 p-4 border rounded-2xl border-neutral-40 shadow-sm flex flex-col items-center gap-6 overflow-x-auto"
							key={order.uuid}
						>
							<div id="product-info" className="flex justify-between items-center flex-col gap-3">
								<p className="mr-2 text-l-bol">{order.product_name}</p>
								<Rate
									className="text-heading-s-bold"
									defaultValue={getRating}
									onChange={e => setValue(`product_rating.${index}.rating`, e)}
								/>
							</div>
						</aside>
					))}
			</div>

			<OrganismsBottomBarRatingAdd handleSubmit={handleSubmitRating} />
		</main>
	);
};

export default PagesRatingAdd;
