import { useCallback, useState } from 'react';

export default function useToggle(initialValue = false): [boolean, (forceValue?: boolean) => void] {
	const [value, setValue] = useState(initialValue);

	const toggle = useCallback((forceValue?: boolean) => {
		if (forceValue !== undefined) {
			setValue(forceValue);
			return;
		}

		setValue((prev) => !prev);
	}, []);

	return [value, toggle];
}
