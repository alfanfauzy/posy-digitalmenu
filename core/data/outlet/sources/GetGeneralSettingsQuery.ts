import {GetGeneralSettingsInput} from '@/domain/outlet/repositories/GetGeneralSettingsRepository';
import {Response} from '@/domain/vo/BaseResponse';
import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import Get from 'api/get';

import {GetGeneralSettingsDataResponse} from '../types/GetGeneralSettingsType';

export const GetGeneralSettingsQueryKey = 'general-settings' as const;

const GetGeneralSettings = async (
	input: GetGeneralSettingsInput,
): Promise<Response<GetGeneralSettingsDataResponse>> => {
	const response = await Get({
		endpoint: '/api/fnb-user-service//menu/setting',
		headers: input,
	});

	return {
		code: response?.code,
		data: response?.data,
		message: response?.message,
		more_info: response?.more_info,
	};
};

export const useGetGeneralSettingsQuery = (
	input: GetGeneralSettingsInput,
	options?: UseQueryOptions<Response<GetGeneralSettingsDataResponse>>,
) =>
	useQuery<Response<GetGeneralSettingsDataResponse>>(
		[GetGeneralSettingsQueryKey],
		() => GetGeneralSettings(input),
		{
			refetchOnWindowFocus: false,
			...options,
		},
	);
