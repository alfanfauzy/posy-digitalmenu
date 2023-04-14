import Image from 'next/image';
import React from 'react';

const ImageBillEmpty = require('public/bill-empty.svg');

const EmptyBasketState = () => {
	return (
		<div className="flex justify-center flex-col p-2 items-center">
			<p className="text-xl-semibold p-1 mb-2 mt-6">Oops! Ther&lsquo;s no order yet</p>
			<Image src={ImageBillEmpty} priority alt="bill-empty" width={350} height={350} />
			<p className="text-l-reguler p-1 mt-6 text-center">
				Start browsing our menu and add your favorite items to your basket.
			</p>
		</div>
	);
};

export default EmptyBasketState;
