import {SEO} from '@/constants/seo';
import MoleculesHeaderNavigation from '@/molecules/header/navigation';
import MoleculesMetaHeader from '@/molecules/meta-header';
import Image from 'next/image';
import {useRouter} from 'next/router';
import React from 'react';

const Image404 = require('public/404-page.svg');

const Page = () => {
	const router = useRouter();

	return (
		<>
			<MoleculesMetaHeader
				title="Posy Resto - 404 Page"
				description={SEO.description}
				keywords={SEO.keywords}
				image={SEO.image}
			/>
			<main className="min-h-screen pt-4 px-5 shadow-md text-center mx-auto my-auto align-middle">
				<MoleculesHeaderNavigation text="Page doesn’t exist" goBack={() => router.back()} />
				<div className="flex items-center flex-col">
					<p className="text-xl-semibold p-1 mb-2 mt-6">Oops! The page doesn&lsquo;t exist.</p>
					<Image src={Image404} priority alt="404-page" width={350} height={350} />
					<p className="text-l-reguler p-1 mt-6">
						Please go back to our menu to browse our delicious items and place your order.
					</p>
				</div>
			</main>
		</>
	);
};

export default Page;
