import ImageMenu from '@/molecules/image/menu';
import {ProductDetail} from 'core/domain/product/models';
import React from 'react';
import {toRupiah} from 'utils/common';

type MoleculesCardMenuDetailProps = {
	product: ProductDetail;
};

const MoleculesCardMenuDetail = ({product}: MoleculesCardMenuDetailProps) => {
	const {is_favourite, cooking_duration, is_discount, price_after_discount, price} = product.detail;

	const {product_name, product_description, product_image_url} = product.detail.product;

	return (
		<article>
			<ImageMenu
				image={{url: product_image_url, alt: product_name}}
				timeLabel={`in ${cooking_duration} min`}
				label={is_discount ? 'Discount' : ''}
				size="l"
				isRecommended={!!is_favourite}
			/>
			<aside className="mt-4 divide-y">
				<div className="pb-4">
					<p className="text-xxl-bold">{product_name}</p>
					<div className="flex items-center gap-2">
						<p className="text-xxl-regular">{toRupiah(price_after_discount)}</p>
						{is_discount && (
							<p className="text-xxl-regular text-neutral-70 line-through">{toRupiah(price)}</p>
						)}
					</div>
					<p className="mt-0.5 text-m-regular">{product_description}</p>
				</div>
				<div />
			</aside>
		</article>
	);
};

export default MoleculesCardMenuDetail;
