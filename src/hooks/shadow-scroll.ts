import {useEffect, useState} from 'react';

const useShadowScroll = () => {
	const [shadow, setShadow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 110 && !shadow) {
				setShadow(true);
			}

			if (window.scrollY < 110 && shadow) {
				setShadow(false);
			}
		};
		handleScroll();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [shadow]);

	return shadow;
};

export default useShadowScroll;
