/* eslint-disable @typescript-eslint/naming-convention */
import {ResultQuery} from '@/domain/vo/BaseResponse';

import {GeneralSettings} from '../models/GeneralSettings';

export type GetGeneralSettingsInput = {
	'X-Transaction-Uuid': string;
};

export type GetGeneralSettingsResult = ResultQuery<GeneralSettings | undefined>;
