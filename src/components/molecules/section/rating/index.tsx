import {Button} from 'posy-fnb-core';
import React from 'react';

type MoleculesSectionRatingAddProps = {
	handleSubmit: () => void;
};

const MoleculesSectionRatingAdd = ({handleSubmit}: MoleculesSectionRatingAddProps) => {
	return (
		<div className="mt-6">
			<Button onClick={handleSubmit} fullWidth variant="primary">
				<p className="text-l-semibold">Submit Ratings</p>
			</Button>
		</div>
	);
};

export default MoleculesSectionRatingAdd;
