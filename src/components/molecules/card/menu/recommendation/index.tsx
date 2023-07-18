import ImageMenu from '@/molecules/image/menu';
import {Product} from 'core/domain/product/models';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Button} from 'posy-fnb-core';
import React from 'react';
import {useAppDispatch} from 'store/hooks';
import {onChangeQuantity} from 'store/slices/menu';
import {renderPrice, toRupiah} from 'utils/common';

type MoleculesCardMenuRecommendationProps = {
	data: Product;
};

const starIcon = require('public/star.svg');

const MoleculesCardMenuRecommendation = ({data}: MoleculesCardMenuRecommendationProps) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const {transaction_uuid} = router.query;
	const {uuid} = data;

	const handleClick = () => {
		setTimeout(() => {
			router.push(`/menu/${transaction_uuid}/${uuid}`);
		}, 500);
		dispatch(onChangeQuantity({operator: 'plus', value: 1}));
	};

	const cookingDuration =
		data.cooking_duration !== 0 ? `in ${data.cooking_duration} min` : undefined;

	return (
		<div className="relative">
			{!data.is_available && (
				<div className="absolute z-10 flex h-full w-full items-center justify-center bg-neutral-10 bg-opacity-70 pb-28">
					<p className="text-center text-xxl-bold text-neutral-100">Sold out</p>
				</div>
			)}
			<div>
				<aside className="flex flex-col">
					<ImageMenu
						onClick={() => handleClick()}
						label={data.is_discount ? 'Discount' : undefined}
						timeLabel={cookingDuration}
						isRecommended={data.is_favourite}
						image={{url: data.product_image_url, alt: 'menu'}}
					/>

					<div className="flex flex-col mt-2 gap-1">
						<p className="text-m-semibold">{data.product_name}</p>
						{data.is_discount ? (
							<div className="mt-1 flex justify-start items-center p-0 gap-1">
								<p className="text-l-medium">
									{renderPrice(data.is_available, data.price_after_discount, data.price).trim()}
								</p>
								<p className="text-s-medium text-neutral-80 line-through">{toRupiah(data.price)}</p>
							</div>
						) : (
							<p className="text-l-medium">{toRupiah(data.price).trim()}</p>
						)}

						<div className="flex flex-row items-center gap-1">
							<Image src={starIcon} alt="star" width={20} height={20} />
							<span className="flex gap-1 flex-row">
								<p>{data.avg_rating === 0 ? '5.0' : data.avg_rating}</p>
								<p className="text-neutral-60">({data.total_review})</p>
							</span>
						</div>
					</div>
				</aside>

				<div className="mt-2">
					<Button variant="secondary" size="m" fullWidth onClick={() => handleClick()}>
						Add
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MoleculesCardMenuRecommendation;
