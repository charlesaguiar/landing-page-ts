import { useCallback, useState, useMemo } from 'react';
import { Popover, OptionContainer, SearchContainer } from './styles';

import Divider from '@/components/atoms/Divider';
import TextInput from '@/components/atoms/TextInput';
import { FaSearch } from 'react-icons/fa';
import colors from '@/design/styles/colors';

interface IOption {
	label: string;
	value: string | number;
	disabled?: boolean;
}

interface IProps {
	isOpen: boolean;
	searchable: boolean;
	options: IOption[];
	selected?: IOption | null;
	handleOptionSelection: (option: IOption) => void;
	emptyOptionsMessage: React.ReactNode;
}

const OptionsPopover: React.FC<IProps> = ({
	isOpen,
	searchable,
	options,
	selected,
	handleOptionSelection,
	emptyOptionsMessage,
}) => {
	const [query, setQuery] = useState('');

	const filteredOptions = useMemo(() => {
		if (!query) {
			return options;
		}

		return options.filter((opt) => opt.label.toLowerCase().includes(query.toLowerCase()));
	}, [query, options]);

	const handleSelection = useCallback((option: IOption) => {
		setQuery('');
		handleOptionSelection(option);
	}, []);

	return (
		<Popover isOpen={isOpen}>
			{searchable && (
				<>
					<SearchContainer>
						<TextInput
							type="text"
							name="select-search"
							value={query}
							onValueChange={(value) => setQuery(value)}
							placeholder="Search"
							startIcon={<FaSearch color={colors.border} />}
						/>
					</SearchContainer>
					<Divider width="100%" />
				</>
			)}
			{filteredOptions.length ? (
				filteredOptions.map((option, index) => (
					<OptionContainer
						key={`opt-${index}-${option.value}`}
						onClick={() => handleSelection(option)}
						disabled={option.disabled}
						selected={option.value === selected?.value}>
						<span>{option.label}</span>
					</OptionContainer>
				))
			) : (
				<OptionContainer disabled>{emptyOptionsMessage}</OptionContainer>
			)}
		</Popover>
	);
};

export default OptionsPopover;
