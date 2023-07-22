import {Button} from 'posy-fnb-core';
import React from 'react';

type MoleculesSectionRatingAddProps = {
	textButton: string;
	handleSubmit: () => void;
};

const MoleculesSectionRatingAdd = ({textButton, handleSubmit}: MoleculesSectionRatingAddProps) => {
	return (
		<div className="mt-6">
			<Button onClick={handleSubmit} fullWidth variant="primary">
				<p className="text-l-semibold">{textButton}</p>
			</Button>
		</div>
	);
};

export default MoleculesSectionRatingAdd;
