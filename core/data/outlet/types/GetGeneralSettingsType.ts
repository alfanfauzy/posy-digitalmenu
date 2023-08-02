import {Timestamp} from '@/domain/vo/BaseMetadata';

export type GetGeneralSettingsDataResponse = {
	general_setting: {
		use_digital_menu: boolean;
		use_open_shift: boolean;
		updated_at: Timestamp;
		updated_by: string;
	};
};
