import {z} from 'zod';

export const validateAddRating = z.object({
	rating: z.number(),
	review: z.string().array(),
	review_note: z.string(),
	product_rating: z
		.object({
			order_detail_uuid: z.string(),
			rating: z.number(),
			review: z.string(),
			review_note: z.string(),
		})
		.array(),
});

export type ValidationSchemaAddRating = z.infer<typeof validateAddRating>;
