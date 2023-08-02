import Transition from '@/atoms/animations/transition';
import {AnimatePresence} from 'framer-motion';
import React, {ReactNode} from 'react';

type NotFoundLayoutProps = {
	children: ReactNode;
};

const NotFoundLayout: React.FC<NotFoundLayoutProps> = ({children}) => {
	return (
		<AnimatePresence initial={false}>
			<Transition>{children}</Transition>
		</AnimatePresence>
	);
};

export default NotFoundLayout;
