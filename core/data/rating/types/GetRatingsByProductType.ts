import {MetadataObject} from '@/domain/vo/BaseMetadata';

type Variant = {
	variant_name: string;
	variant_price: number;
};

type AddonInformation = {
	addon_name: string;
	addon_price: number;
	addon_variants: Array<Variant>;
};

export type GetRatingByProductResponse = {
	uuid: string;
	food_rating_uuid: string;
	product_uuid: string;
	product_name: string;
	addon_information: Array<AddonInformation>;
	customer: {
		name: string;
	};
	rating: number;
	review: Array<string>;
	metadata: MetadataObject;
};
