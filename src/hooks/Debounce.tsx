import { useEffect, useRef, useState } from 'react';

export const useDebounce = (value: string, delayMilisecond: number) => {
	const [debouceValue, setDebouneValue] = useState(value);
	const typingTimeoutRef = useRef(0);
	useEffect(() => {
		typingTimeoutRef.current = window.setTimeout(() => {
			setDebouneValue(value);
		}, delayMilisecond);
		return () => clearTimeout(typingTimeoutRef.current);
	}, [value, delayMilisecond]);

	return debouceValue;
};
