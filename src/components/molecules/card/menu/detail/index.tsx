import ImageMenu from '@/molecules/image/menu';
import {ProductDetail} from 'core/domain/product/models';
import {useRouter} from 'next/router';
import React from 'react';
import {AiFillStar, AiOutlineRight} from 'react-icons/ai';
import {toRupiah} from 'utils/common';

type MoleculesCardMenuDetailProps = {
	product: ProductDetail;
};

const MoleculesCardMenuDetail = ({product}: MoleculesCardMenuDetailProps) => {
	const {query, push} = useRouter();
	const {transaction_uuid, product_uuid} = query;

	const {is_favourite, cooking_duration, is_discount, price_after_discount, price} = product.detail;

	const {product_name, product_description, product_image_url} = product.detail.product;

	const handleShowRatingList = () => {
		const isEmptyRating = product.detail.avg_rating === 0;

		if (!isEmptyRating) {
			push(`/rating/history/${transaction_uuid}/${product_uuid}`);
		}
	};

	const showRatingValue =
		product.detail.avg_rating === 0 ? '5.0' : product.detail.avg_rating.toFixed(1);

	return (
		<article className="flex gap-4 flex-col">
			<ImageMenu
				image={{url: product_image_url, alt: product_name}}
				timeLabel={`in ${cooking_duration} min`}
				label={is_discount ? 'Discount' : ''}
				size="l"
				isRecommended={!!is_favourite}
			/>
			<aside
				className="flex flex-row items-center border border-neutral-40 px-2 py-3 rounded-md cursor-pointer"
				onClick={handleShowRatingList}
			>
				<AiFillStar className="fill-light-yellow" size={30} />
				<span className="flex gap-1 flex-row border-r-2 px-1">
					<p>{showRatingValue}</p>
					<p className="text-neutral-60">({product.detail.total_review})</p>
				</span>
				<span className="flex flex-row justify-between items-center w-full">
					<p className="px-2">View ratings and reviews</p>
					<AiOutlineRight size={20} />
				</span>
			</aside>
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
