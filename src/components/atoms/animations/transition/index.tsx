/* eslint-disable prefer-destructuring */
import {motion, AnimatePresence} from 'framer-motion';
import {useRouter} from 'next/router';
import {FC, ReactNode} from 'react';

const variants = {
	fadeIn: {
		y: 100,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
	inactive: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
	fadeOut: {
		opacity: 0,
		y: -100,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};

const Transition: FC<{children: ReactNode}> = ({children}) => {
	let {asPath} = useRouter();

	const createKey = () => {
		asPath = asPath.split('#')[0];
		const path = asPath.split('/');
		if (asPath.startsWith('/menu')) {
			if (path.length === 4) {
				path.pop();
				return path.join('/');
			}
			return asPath;
		}

		if (path.length === 2) return asPath;

		path.pop();
		return path.join('/');
	};

	return (
		<AnimatePresence initial={false}>
			<motion.div
				key={createKey()}
				variants={variants}
				initial="fadeIn"
				animate="inactive"
				exit="fadeOut"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default Transition;
