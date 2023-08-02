import Image from 'next/image';
import {useRouter} from 'next/router';
import React from 'react';

import HeaderNavigation from '../header/navigation';

const Image404 = require('public/404-page.svg');

const NotFound = () => {
	const router = useRouter();

	const goBack = () => router.back();

	return (
		<main className="min-h-screen pt-4 px-5 shadow-md text-center mx-auto my-auto align-middle">
			<HeaderNavigation text="Page doesn&lsquo;t exist" goBack={goBack} />
			<div className="flex items-center flex-col">
				<p className="text-xl-semibold p-1 mb-2 mt-6">Oops! The page doesn&lsquo;t exist.</p>
				<Image src={Image404} priority alt="404-page" width={350} height={350} />
				<p className="text-l-reguler p-1 mt-6">
					Please go back to our menu to browse our delicious items and place your order.
				</p>
			</div>
		</main>
	);
};

export default NotFound;
