import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import OrganismsBottomBarRatingAdd from '@/organisms/bottom-bar/rating';
import Image from 'next/image';
import {useRouter} from 'next/router';
import React from 'react';
import {useAppDispatch} from 'store/hooks';
import {onResetRating} from 'store/slices/rating';

const ImageRatingCompleted = require('public/rating_completed.svg');

const PagesRatingAddSuccessfull = () => {
	const dispatch = useAppDispatch();
	const {query, push} = useRouter();
	const {transaction_uuid} = query;

	const handleButtonBack = () => {
		dispatch(onResetRating());
		push(`/payment/completed/${transaction_uuid}`);
	};

	return (
		<main className="mx-auto min-h-screen pt-4 px-5 shadow-md">
			<MoleculesHeaderNavigation text="Foods Ratings Complete" isWithIcon={false} />

			<Image src={ImageRatingCompleted} priority alt="rating completed" className="m-auto" />
			<aside className="flex flex-col text-center mt-6">
				<h3 className="text-xxl-semibold">Thank you for your ratings!</h3>
				<h4 className="text-m-regular mt-6">
					Your feedback is incredibly valuable to us as we strive to provide the best possible taste
					and quality in our dishes.
				</h4>
			</aside>

			<OrganismsBottomBarRatingAdd
				handleSubmit={handleButtonBack}
				textButton="Back to Payment Summary"
			/>
		</main>
	);
};

export default PagesRatingAddSuccessfull;
