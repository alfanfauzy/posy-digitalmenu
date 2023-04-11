import Image from 'next/image';
import React from 'react';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {useAppSelector} from 'store/hooks';

const MoleculesHeaderOutletInfo = () => {
	const {
		outlet: {outlet: OutletDetail},
	} = useAppSelector(state => state.outlet);

	return (
		<section className="ml-4 flex items-center gap-2 rounded-l-2xl bg-neutral-20 p-4">
			<div className="w-2/3 flex-1 gap-4">
				<p className="truncate text-xl-semibold mb-2">{OutletDetail.outlet_name}</p>
				<div className="flex items-start gap-1">
					<HiOutlineLocationMarker />
					<div>
						<p className="truncate text-m-medium capitalize">{OutletDetail.outlet_name}</p>
					</div>
				</div>
			</div>
			<div>
				<Image src={OutletDetail.logo_image_url} priority alt="logo" width={60} height={60} />
			</div>
		</section>
	);
};

export default MoleculesHeaderOutletInfo;
