import ImageMenu from '@/molecules/image/menu';
import {Product} from 'core/domain/product/models';
import {useRouter} from 'next/router';
import {Button} from 'posy-fnb-core';
import React from 'react';
import {renderPrice, toRupiah} from 'utils/common';

type MoleculesCardMenuRecommendationProps = {
	data: Product;
};

const MoleculesCardMenuRecommendation = ({data}: MoleculesCardMenuRecommendationProps) => {
	const router = useRouter();
	const {transaction_uuid} = router.query;

	const {uuid} = data;

	return (
		<div className="relative">
			{!data.is_available && (
				<div className="absolute z-10 flex h-full w-full items-center justify-center bg-neutral-10 bg-opacity-70 pb-28">
					<p className="text-center text-xxl-bold text-neutral-100">Sold out</p>
				</div>
			)}
			<div>
				<ImageMenu
					onClick={() => router.push(`/menu/${transaction_uuid}/${uuid}/`)}
					label={data.is_discount ? 'Discount' : undefined}
					timeLabel={`in ${data.cooking_duration} min`}
					isRecommended={data.is_favourite}
					image={{url: data.product_image_url, alt: 'menu'}}
				/>

				<div className="mt-1">
					<p className="text-m-semibold">{data.product_name}</p>
					<div className="mt-1 flex items-center gap-1">
						{data.is_discount ? (
							<>
								<p className="text-l-medium">
									{renderPrice(data.is_available, data.price_after_discount, data.price)}
								</p>
								<p className="text-s-medium text-neutral-80 line-through">{toRupiah(data.price)}</p>
							</>
						) : (
							<p>
								<p className="text-l-medium">{toRupiah(data.price)}</p>
							</p>
						)}
					</div>
				</div>

				<div className="mt-2">
					<Button
						variant="secondary"
						size="m"
						fullWidth
						onClick={() => router.push(`/menu/${transaction_uuid}/${uuid}`)}
					>
						Add
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MoleculesCardMenuRecommendation;
