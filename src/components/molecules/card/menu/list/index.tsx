import ImageMenu from '@/molecules/image/menu';
import {Product} from 'core/domain/product/models';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Button, Label, TimeLabel} from 'posy-fnb-core';
import React, {useMemo, useState} from 'react';
import Highlighter from 'react-highlight-words';
import {BiTimeFive} from 'react-icons/bi';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {onChangeQuantity} from 'store/slices/menu';
import {calculateQuantity, calculateOrder, toRupiah, renderPrice} from 'utils/common';

const BottomSheet = dynamic(() => import('posy-fnb-core').then(el => el.BottomSheet), {
	loading: () => <div />,
});

type MoleculesCardMenuListProps = {
	product: Product;
};

const starIcon = require('public/star.svg');
const MoleculesCardMenuList = ({product}: MoleculesCardMenuListProps) => {
	const router = useRouter();
	const {transaction_uuid} = router.query;
	const dispatch = useAppDispatch();
	const {basket} = useAppSelector(state => state.basket);
	const {search} = useAppSelector(state => state.menu);
	const selected = basket.filter(el => el.product.detail.product.uuid === product.uuid);

	const quantity = useMemo(() => calculateQuantity(selected), [selected]);

	const [openBottomBar, setOpenBottomBar] = useState(false);

	const handleMakesNewOrder = () => {
		setTimeout(() => {
			router.push(`/menu/${transaction_uuid}/${product.uuid}`);
		}, 500);
		setOpenBottomBar(false);
		dispatch(onChangeQuantity({operator: 'plus', value: 1}));
	};

	const handleClick = () => {
		if (selected.length > 0) {
			setOpenBottomBar(true);
		} else {
			handleMakesNewOrder();
		}
	};

	const handleClickExisting = (counter: number) => {
		setTimeout(() => {
			router.push({
				pathname: `/menu/${transaction_uuid}/${product.uuid}`,
				query: {counter},
			});
		}, 300);
		setOpenBottomBar(false);
	};

	return (
		<>
			<div className="relative">
				{!product?.is_available && (
					<div className="absolute z-10 flex h-full w-full items-center justify-center bg-neutral-10 bg-opacity-40 pb-28" />
				)}
				<aside
					role="presentation"
					onClick={handleClick}
					className="flex flex-col w-full gap-4 p-4 transition duration-300 ease-in-out hover:bg-neutral-20 active:animate-pulse"
				>
					<div className="flex">
						<div className="flex-1 gap-1">
							<p
								className={`text-m-semibold line-clamp-3 ${
									selected.length > 0 ? 'text-secondary-main' : ''
								}`}
							>
								<Highlighter
									highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
									searchWords={[search]}
									autoEscape
									textToHighlight={product.product_name ? product.product_name.toString() : ''}
								/>
							</p>

							<div className="flex flex-row items-center align-baseline gap-1">
								<Image src={starIcon} alt="star" width={20} height={20} />
								<span className="flex gap-1 flex-row">
									<p>{product.avg_rating === 0 ? '5.0' : product.avg_rating}</p>
									<p className="text-neutral-60">({product.total_review})</p>
								</span>
							</div>

							{product.is_discount && <Label size="s" title="Discount" />}
							<p className="mt-1 text-m-regular line-clamp-3">{product.product_description}</p>

							{product.cooking_duration !== 0 && (
								<TimeLabel
									startAdornment={<BiTimeFive />}
									size="s"
									title={`in ${product.cooking_duration} min`}
								/>
							)}
						</div>

						<div className="flex flex-col items-end">
							<ImageMenu
								image={{url: product.product_image_url, alt: 'menu'}}
								size="s"
								className="mb-4"
							/>
						</div>
					</div>
					<div className="flex justify-between">
						{product.is_discount ? (
							<div className="flex gap-1 items-center mt-1">
								<p className="text-l-medium">
									{renderPrice(
										product.is_available,
										product.price_after_discount,
										product.price,
									).trim()}
								</p>
								<p className="text-s-medium text-neutral-80 line-through">
									{toRupiah(product.price)}
								</p>
							</div>
						) : (
							<p>
								<p className="text-l-medium">{toRupiah(product.price).trim()}</p>
							</p>
						)}
						<Button variant="secondary" size="xs">
							{`${selected.length > 0 ? `${quantity} item${quantity > 1 ? 's' : ''}` : 'Add'}`}
						</Button>
					</div>
				</aside>
			</div>
			{selected.length > 0 && (
				<BottomSheet
					alignTitle="start"
					title={'Menu Order'}
					open={openBottomBar}
					onClose={() => setOpenBottomBar(false)}
				>
					<div className="mt-4 max-h-[560px] w-full overflow-auto border-t">
						{selected.map(el => (
							<aside
								key={el.product.detail.product.uuid}
								role="presentation"
								onClick={() => handleClickExisting(el.counter)}
								className="flex items-center justify-between gap-3 py-4"
							>
								<div>
									<p className="text-m-semibold">{product.product_name}</p>
									{el.addOnVariant.length > 0 && (
										<p className=" text-m-medium">{`${el.addOnVariant[0].addOnName} : ${el.addOnVariant[0].variant_name}`}</p>
									)}
								</div>

								<div className="w-fit rounded-3xl border py-2 px-4 text-l-semibold">{`x${el.quantity}`}</div>

								<div>
									<p className="text-m-regular">{toRupiah(calculateOrder(el) || 0)}</p>
								</div>
							</aside>
						))}
						<aside className="pb-2">
							<Button size="m" fullWidth onClick={handleMakesNewOrder}>
								Make Another
							</Button>
						</aside>
					</div>
				</BottomSheet>
			)}
		</>
	);
};

export default MoleculesCardMenuList;
