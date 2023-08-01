import {Addons} from 'core/domain/addon/model';
import {Checkbox, Radio} from 'posy-fnb-core';
import React from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {onChangeAddOn} from 'store/slices/menu';
import {toRupiah} from 'utils/common';
import {logEvent} from 'utils/UtilsAnalytics';

type MoleculesSectionAddonProps = {
	add_on: Addons;
};

const MoleculesSectionAddon = ({add_on}: MoleculesSectionAddonProps) => {
	const dispatch = useAppDispatch();
	const addOnVariant = useAppSelector(state => state.menu.orderForm.addOnVariant);

	const handleChangeAddon = (
		type: 'radio' | 'checkbox',
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		variants: any,
		addOn: {addOnName: string; addOnUuid: string},
	) => {
		if (type === 'radio') {
			logEvent({category: 'menu_detail', action: 'menudetails_requiredvariant_click'});
		} else {
			logEvent({category: 'menu_detail', action: 'menudetails_addons_click'});
		}

		dispatch(
			onChangeAddOn({
				type,
				addOnVariant: {
					addOnName: addOn.addOnName,
					addOnUuid: addOn.addOnUuid,
					variant_price: variants.variant_price ?? 0,
					...variants,
				},
			}),
		);
	};

	return (
		<article>
			{add_on.map(addon => (
				<aside key={addon.addon_name}>
					<div className="mt-4">
						<p className="text-xl-semibold">{addon.addon_name}</p>
						<p className="text-m-regular">
							{`${addon.is_optional ? 'Optional' : 'Required | select 1'}`}
						</p>
					</div>
					<section className="border-b">
						<aside className="pb-4 text-neutral-100">
							{addon.variants.map((variants, variant_idx) =>
								addon.can_choose_multiple ? (
									<div key={variants.uuid}>
										<Checkbox
											size="m"
											value={variants.uuid}
											checked={addOnVariant?.some(el => el.uuid === variants.uuid)}
											onChange={() =>
												handleChangeAddon('checkbox', variants, {
													addOnName: addon.addon_name,
													addOnUuid: addon.uuid,
												})
											}
											label={
												!variants.variant_price || variants.variant_price === 0
													? 'Free'
													: toRupiah(variants.variant_price)
											}
											title={variants.variant_name}
										/>
										<div />
										{addon.variants.length - 1 !== variant_idx && <div className="border-b" />}
									</div>
								) : (
									<div key={variants.uuid}>
										<Radio
											selectedValue={
												addOnVariant?.find(el => el.uuid === variants.uuid)?.uuid ?? ''
											}
											value={variants.uuid}
											onChange={() =>
												handleChangeAddon('radio', variants, {
													addOnName: addon.addon_name,
													addOnUuid: addon.uuid,
												})
											}
											label={
												!variants.variant_price || variants.variant_price === 0
													? 'Free'
													: toRupiah(variants.variant_price)
											}
											title={variants.variant_name}
										/>
										{addon.variants.length - 1 !== variant_idx && <div className="border-b" />}
									</div>
								),
							)}
						</aside>
					</section>
				</aside>
			))}
		</article>
	);
};

export default MoleculesSectionAddon;
