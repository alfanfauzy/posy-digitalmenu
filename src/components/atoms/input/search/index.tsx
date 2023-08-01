import React from 'react';
import {FiSearch} from 'react-icons/fi';
import {MdCancel} from 'react-icons/md';
import {useAppSelector} from 'store/hooks';
import {logEvent} from 'utils/UtilsAnalytics';

type AtomsInputSearchProps = {
	isOpen: boolean;
	open: () => void;
	onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClearSearch: () => void;
};
const AtomsInputSearch = ({isOpen, open, onSearch, onClearSearch}: AtomsInputSearchProps) => {
	const {search} = useAppSelector(state => state.menu);

	const handleOnFocus = () => {
		open();
		logEvent({category: 'homepage', action: 'homepage_searchbar_click'});
	};

	return (
		<div className={`transition-all duration-500 ease-in-out ${isOpen ? '-ml-4 w-full' : 'w-1/3'}`}>
			<span className="relative flex h-full items-center justify-start">
				<div className="absolute left-4">
					<FiSearch size={16} className="stroke-neutral-90" />
				</div>
				<input
					onFocus={handleOnFocus}
					onBlur={
						search.length === 0 ? () => setTimeout(() => onClearSearch(), 100) : () => undefined
					}
					onChange={onSearch}
					value={search}
					type="text"
					placeholder="Search"
					className={`h-8 w-full rounded-full border border-neutral-70 pl-10 text-m-medium placeholder:text-neutral-80 focus:outline-neutral-50 ${
						isOpen ? 'pr-10' : ''
					} `}
				/>
				{search.length > 0 && (
					<div className="absolute right-4">
						<MdCancel
							size={20}
							className="cursor-pointer fill-neutral-60"
							onClick={onClearSearch}
						/>
					</div>
				)}
			</span>
		</div>
	);
};

export default AtomsInputSearch;
