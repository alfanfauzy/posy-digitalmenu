import type {IconType} from '@/types/icon';
import * as React from 'react';

export const Bell = ({
	fill = 'currentColor',
	width = 22,
	height = 18,
	onClick,
	className,
}: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		onClick={onClick}
		width={width}
		height={height}
	>
		<path
			fill={fill}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M11.73 20a2 2 0 0 1-3.46 0M16 7A6 6 0 1 0 4 7c0 7-3 9-3 9h18s-3-2-3-9Z"
		/>
	</svg>
);
