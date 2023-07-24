export const capitalizeFirstLetter = (str: string) => {
	const words = str.split(' ');

	// Capitalize the first letter of each word and convert the rest to lowercase
	const capitalizedWords = words.map(word => {
		const firstLetter = word.charAt(0).toUpperCase();
		const restOfWord = word.slice(1).toLowerCase();
		return firstLetter + restOfWord;
	});

	// Join the words back together to form the final result
	const convertedString = capitalizedWords.join(' ');

	return convertedString;
};
