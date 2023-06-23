import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';

type MoleculesHeaderNavigationProps = {
	text: string;
	goBack?: () => void;
	isWithIcon?: boolean;
};

const MoleculesHeaderNavigation = ({
	text,
	goBack,
	isWithIcon = true,
}: MoleculesHeaderNavigationProps) => {
	return (
		<section className="cursor-pointer">
			<div className="mb-4 flex items-center gap-2">
				{isWithIcon && <IoIosArrowBack onClick={goBack} size={24} className="cursor-pointer" />}
				<p className="text-xxl-semibold">{text}</p>
			</div>
			<div className="border-t border-neutral-30" />
		</section>
	);
};

export default MoleculesHeaderNavigation;
