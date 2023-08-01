import MoleculesSectionRatingAdd from '@/molecules/section/rating';
import React from 'react';

type OrganismsBottomBarRatingAddProps = {
	textButton: string;
	handleSubmit: () => void;
};

const OrganismsBottomBarRatingAdd = ({
	textButton,
	handleSubmit,
}: OrganismsBottomBarRatingAddProps) => (
	<section
		style={{
			boxShadow: '0px -6px 24px rgb(0 0 0 / 10%)',
		}}
		className="fixed bottom-0 z-20 -ml-[20px] w-full max-w-[576px] rounded-t-2xl bg-neutral-10 px-4 pb-6 pt-1"
	>
		<MoleculesSectionRatingAdd handleSubmit={handleSubmit} textButton={textButton} />
	</section>
);

export default OrganismsBottomBarRatingAdd;
