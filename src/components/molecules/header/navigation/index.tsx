import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';

type MoleculesHeaderNavigationProps = {
	text: string;
	goBack: () => void;
};

const MoleculesHeaderNavigation = ({text, goBack}: MoleculesHeaderNavigationProps) => {
	return (
		<section onClick={goBack} className="cursor-pointer">
			<div className="mb-4 flex items-center gap-2">
				<IoIosArrowBack size={24} className="cursor-pointer" />
				<p className="text-xxl-semibold">{text}</p>
			</div>
			<div className="border-t border-neutral-30" />
		</section>
	);
};

export default MoleculesHeaderNavigation;
