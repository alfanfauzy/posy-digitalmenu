/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import {Label, TimeLabel} from 'posy-fnb-core';
import React from 'react';
import {BiTimeFive} from 'react-icons/bi';
import Recommended from 'src/assets/icons/recommended';

const ImageStarRecomendation = require('public/recomendation.png');

type MoleculesImageMenuProps = {
	onClick?: () => void;
	size?: 's' | 'm' | 'l';
	isRecommended?: boolean;
	label?: string;
	timeLabel?: string;
	className?: string;
	image: Image;
};

type Image = {
	url: string;
	alt: string;
};

const MoleculesImageMenu = ({
	onClick,
	image,
	size = 'm',
	isRecommended,
	label,
	timeLabel,
	className,
}: MoleculesImageMenuProps) => {
	const properties = {
		s: 'h-[78px] w-[78px]',
		m: 'h-52 w-auto',
		l: 'h-72 w-auto',
	};
	return (
		<div
			onClick={onClick}
			role="presentation"
			className={`${properties[size]} ${className} h-fit relative transition duration-300 ease-in-out`}
		>
			{/* temporary using img tag from html due to appearing some issues in server configuration*/}
			{/* <Image
				src={image.url}
				alt={image.alt}
				fill
				priority
				sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
				className="rounded-lg object-cover shadow-sm hover:bg-opacity-70"
			/> */}
			<div>
				<img
					src={image.url}
					alt={image.alt}
					loading="lazy"
					className="rounded-lg object-cover shadow-sm w-full aspect-square hover:bg-opacity-70"
				/>
			</div>
			{size !== 's' && label && (
				<div className="absolute top-3">
					<Label size={size === 'm' ? 's' : 'l'} title={label} />
				</div>
			)}
			<div
				className={`absolute bottom-3 flex w-full items-center ${size === 'l' ? 'pr-4' : 'pr-2'} ${
					timeLabel ? 'justify-between' : 'justify-end'
				}`}
			>
				{size !== 's' && timeLabel && (
					<TimeLabel
						startAdornment={<BiTimeFive />}
						size={size === 'm' ? 's' : 'l'}
						title={timeLabel}
					/>
				)}
				{size !== 's' && isRecommended && (
					<img src="/recomendation.png" alt="recomendation" width={35} height={35} />
				)}
			</div>
		</div>
	);
};

export default MoleculesImageMenu;
