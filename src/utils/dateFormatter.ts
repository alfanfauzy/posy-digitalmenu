import {format, formatISO, fromUnixTime, parseISO} from 'date-fns';

type DateFormatType =
	| 'dd LLL yyyy HH:mm:ss'
	| 'E, dd MMM yyyy - HH:mm'
	| 'dd MMM yyyy - HH:mm'
	| 'E, dd MMM yyyy'
	| 'MMMM yyyy'
	| 'yyyy-MM'
	| 'yyyy-MM-dd'
	| 'dd MMM yyyy'
	| 'E'
	| 'dd'
	| 'MM'
	| 'HH:mm'
	| 'EEE, dd MMM yyyy'
	| 'EEE, c LLLL yyyy'
	| 'P'
	| 'dd MMM, HH:mm'
	| 't';

export const dateFormatter = (
	date: number | Date | string,
	dateFormat?: DateFormatType,
): string | number => {
	if (typeof date === 'number') {
		const formatDate = fromUnixTime(date);
		return format(formatDate, dateFormat || 'dd MMMM yyyy');
	}

	if (typeof date === 'string') {
		const dateIso = parseISO(date);
		return format(dateIso, dateFormat || 'dd MMMM yyyy');
	}

	return format(date, dateFormat || 'dd MMMM yyyy');
};

export const toUnix = (date: Date): string => {
	const unixTimestamp = format(date, 't');

	return unixTimestamp;
};
