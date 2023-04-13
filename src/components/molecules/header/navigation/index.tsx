import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';

type MoleculesHeaderNavigationProps = {
	text: string;
	goBack: () => void;
};

const MoleculesHeaderNavigation = ({text, goBack}: MoleculesHeaderNavigationProps) => {
	return (
		<section className="px-4">
			<div className="mb-4 flex items-center gap-4">
				<IoIosArrowBack onClick={goBack} size={24} className="cursor-pointer" />
				<p className="text-xxl-semibold">{text}</p>
			</div>
			<div className="border-t border-neutral-30" />
		</section>
	);
};

export default MoleculesHeaderNavigation;
