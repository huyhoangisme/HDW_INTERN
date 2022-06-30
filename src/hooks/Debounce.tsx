import { useEffect, useRef, useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
	const [debouceValue, setDebouneValue] = useState(value);
	const typingTimeoutRef = useRef(0);
	useEffect(() => {
		typingTimeoutRef.current = window.setTimeout(() => {
			setDebouneValue(value);
		}, delay);
		return () => clearTimeout(typingTimeoutRef.current);
	}, [value, delay]);

	return debouceValue;
};
