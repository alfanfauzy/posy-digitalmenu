export type VariantBased = {
	uuid: string;
	variant_name: string;
	variant_price: number;
	variant_priority: number;
};

export type Variant = VariantBased;
export type Variants = Array<VariantBased>;

export type AddonBased = {
	uuid: string;
	addon_name: string;
	is_optional: boolean;
	can_choose_multiple: boolean;
	min_variant: number;
	max_variant: number;
	priority: number;
	variants: Array<Variant>;
};

export type Addon = AddonBased;
export type Addons = Array<AddonBased>;
