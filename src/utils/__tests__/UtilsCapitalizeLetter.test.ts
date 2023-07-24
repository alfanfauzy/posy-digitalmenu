import '@testing-library/jest-dom/extend-expect';
import {capitalizeFirstLetter} from 'utils/UtilsCapitalizeLetter';

// Test cases
describe('capitalizeFirstLetter', () => {
	test('should capitalize the first letter of each word and convert the rest to lowercase', () => {
		expect(capitalizeFirstLetter('hello world')).toBe('Hello World');
		expect(capitalizeFirstLetter('jAVAsCRIPT iS aMAZING')).toBe('Javascript Is Amazing');
		// Add more test cases as needed
	});

	test('should return an empty string when input is an empty string', () => {
		expect(capitalizeFirstLetter('')).toBe('');
	});

	// Add more test cases to cover edge cases or special scenarios
});
