export type Metadata = {
	created_at?: number;
	updated_at?: number;
	cancel_at?: number;
};

export type Timestamp = {
	seconds: number;
	nanos: number;
};

export type MetadataServer = {
	created_at?: Timestamp;
	updated_at?: Timestamp;
	cancel_at?: Timestamp;
};
