import { useDebounce } from 'hooks/Debounce';
import { useEffect, useState } from 'react';

export interface SearchProps {
	onSubmit: (value: string) => void;
}
const Search = ({ onSubmit }: SearchProps) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debounceValue = useDebounce(searchTerm, 800);
	useEffect(() => {
		if (debounceValue) {
			onSubmit(searchTerm);
		} else onSubmit('');
	}, [debounceValue]);

	if (!onSubmit) return null;
	return (
		<div className="px-24 mt-6">
			<input
				type="text"
				className="form-control"
				placeholder="Search name student..."
				value={searchTerm}
				onChange={(event) => setSearchTerm(event.target.value)}
			/>
		</div>
	);
};
export default Search;
