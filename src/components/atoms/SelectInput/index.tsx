import { useCallback, useRef, useMemo } from 'react';

import useClickAwayListener from '@/hooks/useClickAwayListener';
import useToggle from '@/hooks/useToggle';

import { FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';

import IconButton from '@/components/atoms/IconButton';
import TextInput from '@/components/atoms/TextInput';

import OptionsPopover from './OptionsPopover';

import { Container, EndIconsContainer } from './styles';
import colors from '@/design/styles/colors';

interface IOption {
	label: string;
	value: string | number;
	disabled?: boolean;
}

interface IProps {
	label?: string;
	options: IOption[];
	selected: IOption | null;
	onSelection: (newOption: IOption | null) => void;
	placeholder?: string;
	disabled?: boolean;
	dismissable?: boolean;
	searchable?: boolean;
	clearable?: boolean;
	required?: boolean;
	emptyOptionsMessage?: React.ReactNode;
}

const SelectInput: React.FC<IProps> = ({
	label,
	options,
	selected,
	onSelection,
	placeholder,
	disabled = false,
	dismissable = true,
	searchable = false,
	clearable = true,
	required = false,
	emptyOptionsMessage = 'No data available',
}) => {
	const selectInputRef = useRef<HTMLDivElement>(null);
	const [isOpen, toggleIsOpen] = useToggle(false);

	useClickAwayListener(selectInputRef, () => toggleIsOpen(false));

	const handleOptionSelection = useCallback(
		(option: IOption) => {
			onSelection(option);

			if (dismissable) {
				toggleIsOpen(false);
			}
		},
		[onSelection, dismissable],
	);

	const chevron = useMemo(
		() => (
			<IconButton
				icon={
					isOpen ? <FaChevronUp color={colors.border} /> : <FaChevronDown color={colors.border} />
				}
				onClick={() => toggleIsOpen()}
			/>
		),
		[isOpen],
	);

	const clear = useMemo(
		() =>
			clearable &&
			selected && (
				<IconButton icon={<FaTimes color={colors.border} />} onClick={() => onSelection(null)} />
			),
		[clearable, selected],
	);

	return (
		<Container ref={selectInputRef}>
			<TextInput
				type="text"
				value={selected?.label || ''}
				label={label}
				placeholder={placeholder}
				disabled={disabled}
				required={required}
				endIcon={
					<EndIconsContainer>
						{clear}
						{chevron}
					</EndIconsContainer>
				}
				onFocus={() => toggleIsOpen(true)}
			/>

			<OptionsPopover
				isOpen={isOpen}
				searchable={searchable}
				options={options}
				selected={selected}
				handleOptionSelection={handleOptionSelection}
				emptyOptionsMessage={emptyOptionsMessage}
			/>
		</Container>
	);
};

export default SelectInput;
