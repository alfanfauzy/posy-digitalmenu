import {useRouter} from 'next/router';
import {Button} from 'posy-fnb-core';
import React, {useMemo} from 'react';
import {useAppSelector} from 'store/hooks';
import {calculateQuantity, calculateTotal, toRupiah} from 'utils/common';
import {logEvent} from 'utils/UtilsAnalytics';

const AtomsButtonFloating = () => {
	const router = useRouter();
	const {transaction_uuid} = router.query;

	const {basket} = useAppSelector(state => state.basket);

	const totalQuantity = useMemo(() => calculateQuantity(basket), [basket]);
	const totalPrice = useMemo(() => calculateTotal(basket), [basket]);

	const goToBasket = () => {
		logEvent({category: 'homepage', action: 'homepage_activebasket_click'});
		router.push(`/basket/${transaction_uuid}`);
	};

	const wordingTotalQuantity = `${totalQuantity} ${totalQuantity > 1 ? 'items' : 'item'}`;

	return (
		<div className="fixed bottom-20 z-30 w-full max-w-[576px] px-4">
			<Button onClick={goToBasket} style={{boxShadow: '0px 6px 24px rgb(0 0 0 / 15%)'}} fullWidth>
				<div className="flex items-center justify-between gap-2">
					<div className="flex flex-1 items-center gap-2">
						<p className="text-l-semibold">Basket</p>
						<p className="truncate text-m-regular">{wordingTotalQuantity}</p>
					</div>
					<p className="flex flex-1 justify-end text-xxl-semibold">{toRupiah(totalPrice)}</p>
				</div>
			</Button>
		</div>
	);
};

export default AtomsButtonFloating;
