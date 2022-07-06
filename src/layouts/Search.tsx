import { useDebounce } from 'hooks/Debounce';
import { useQueryString } from 'hooks/queryString';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export interface SearchProps {
	onSubmit: (value: string) => void;
}
const Search = ({ onSubmit }: SearchProps) => {
	const history = useHistory();
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debounceValue = useDebounce(searchTerm, 800);
	const searchValue = useQueryString('name_like');
	useEffect(() => {
		if (!searchValue) return;
		if (searchValue) setSearchTerm(searchValue);
	}, [searchValue]);
	useEffect(() => {
		if (debounceValue) {
			onSubmit(searchTerm);
		} else onSubmit('');
	}, [debounceValue]);
	const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newUrl = `student?name_like=${event.target.value}`;
		history.push(newUrl);
		setSearchTerm(event.target.value);
	};
	if (!onSubmit) return null;
	return (
		<div className="px-24 mt-6">
			<input
				type="text"
				className="form-control"
				placeholder="Search name student..."
				value={searchTerm}
				onChange={(event) => handleSearchTerm(event)}
			/>
		</div>
	);
};
export default Search;
