import type {IconType} from '@/types/icon';
import * as React from 'react';

const Menu = ({fill = 'currentColor', width = 22, height = 22, onClick, className}: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		onClick={onClick}
		width={width}
		height={height}
		fill={fill}
	>
		<path
			fill={fill}
			d="M18 1.5H4.5a.75.75 0 0 0-.75.75v19.5a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-1.5 0V21h-1.5V3H18a.75.75 0 0 1 .75.75v16.5A.75.75 0 0 1 18 21H8.25c-.199 0-1.11.36-1.25.5-.14.14 0-.199 0 0s-.64.36-.5.5.801.5 1 .5H18a2.25 2.25 0 0 0 2.25-2.25V3.75A2.25 2.25 0 0 0 18 1.5Z"
		/>
		<path
			fill={fill}
			d="M13.5 5.25a.75.75 0 0 0-.75.75v.825a3.75 3.75 0 0 0-3 3.675.75.75 0 1 0 0 1.5h7.5a.75.75 0 1 0 0-1.5 3.75 3.75 0 0 0-3-3.675V6a.75.75 0 0 0-.75-.75Zm2.25 5.25h-4.5a2.25 2.25 0 0 1 4.5 0ZM16.845 18.75A1.155 1.155 0 0 0 18 17.595v-1.44A1.155 1.155 0 0 0 16.845 15h-6.69A1.155 1.155 0 0 0 9 16.155v1.44a1.155 1.155 0 0 0 1.155 1.155h6.69ZM10.5 16.5h6v.75h-6v-.75Z"
		/>
	</svg>
);
export default Menu;
