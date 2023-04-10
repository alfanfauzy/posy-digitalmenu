import type {IconType} from '@/types/icon';
import React from 'react';

export const Info = ({fill = '#FC5454', width = 52, height = 52, onClick, className}: IconType) => (
	<svg
		className={className}
		onClick={onClick}
		width={width}
		height={height}
		viewBox="0 0 52 52"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M51.6 26.0004C51.6 40.1389 40.1385 51.6004 26 51.6004C11.8615 51.6004 0.400024 40.1389 0.400024 26.0004C0.400024 11.8619 11.8615 0.400391 26 0.400391C40.1385 0.400391 51.6 11.8619 51.6 26.0004ZM29.2 38.8004C29.2 40.5677 27.7673 42.0004 26 42.0004C24.2327 42.0004 22.8 40.5677 22.8 38.8004C22.8 37.0331 24.2327 35.6004 26 35.6004C27.7673 35.6004 29.2 37.0331 29.2 38.8004ZM26 10.0004C24.2327 10.0004 22.8 11.4331 22.8 13.2004V26.0004C22.8 27.7677 24.2327 29.2004 26 29.2004C27.7673 29.2004 29.2 27.7677 29.2 26.0004V13.2004C29.2 11.4331 27.7673 10.0004 26 10.0004Z"
			fill={fill}
		/>
	</svg>
);

export default Info;
