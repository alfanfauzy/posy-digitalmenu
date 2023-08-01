export type Metadata = {
	created_at?: number;
	updated_at?: number;
	cancel_at?: number;
};

type BaseTime = {
	seconds: number;
	nanos: number;
};

export type MetadataObject = {
	created_at?: BaseTime;
	updated_at?: BaseTime;
	cancel_at?: BaseTime;
};
