import React from 'react';
import {AiFillStar} from 'react-icons/ai';

type MoleculesRatingProps = {
	ratingValue: number;
	totalReview: number;
};

const MoleculesRating = ({ratingValue, totalReview}: MoleculesRatingProps) => {
	const showRatingValue = ratingValue === 0 ? '5.0' : ratingValue;

	return (
		<div className="flex flex-row items-center gap-1">
			<AiFillStar className="fill-light-yellow" size={20} />
			<span className="flex gap-1 flex-row">
				<p>{showRatingValue}</p>
				<p className="text-neutral-60">({totalReview})</p>
			</span>
		</div>
	);
};

export default MoleculesRating;
