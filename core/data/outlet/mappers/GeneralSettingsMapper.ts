import {GeneralSettings} from '@/domain/outlet/models/GeneralSettings';

import {GetGeneralSettingsDataResponse} from '../types/GetGeneralSettingsType';

export const mapToGeneralSettingsModel = (
	datas: GetGeneralSettingsDataResponse,
): GeneralSettings => ({
	use_open_shift: datas.general_setting.use_open_shift,
	use_digital_menu: datas.general_setting.use_digital_menu,
	updated_at: datas.general_setting.updated_at?.seconds,
	updated_by: datas.general_setting?.updated_by,
});
