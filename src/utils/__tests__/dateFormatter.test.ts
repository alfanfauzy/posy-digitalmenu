import {dateFormatter, toUnix} from 'src/utils/dateFormatter';

describe('dateFormatter', () => {
	test('valid', () => {
		const test = dateFormatter(new Date('1988-08-06T07:01:31.240937Z'));
		expect(test).toBe('06 August 1988');
	});

	test('valid data with date format', () => {
		const testWithDateFormat = dateFormatter(
			new Date('1988-08-06T07:01:31.240937Z'),
			'dd MMM yyyy',
		);
		expect(testWithDateFormat).toBe('06 Aug 1988');
	});

	test('valid with date as string', () => {
		const timeString = '1988-08-06T07:01:31.240937Z';
		const testWithDateFormat = dateFormatter(timeString, 'dd MMM yyyy');
		expect(testWithDateFormat).toBe('06 Aug 1988');
	});

	test('valid with date as number', () => {
		const timeNumber = 1690181502;
		const testWithDateFormat = dateFormatter(timeNumber, 'dd MMM yyyy');
		expect(testWithDateFormat).toBe('24 Jul 2023');
	});
});
