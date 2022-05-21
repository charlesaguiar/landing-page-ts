import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SelectInput from '@/components/atoms/SelectInput';

export default {
	title: 'Select Input',
	component: SelectInput,
} as ComponentMeta<typeof SelectInput>;

interface IOption {
	label: string;
	value: string | number;
	disabled?: boolean;
}

const Container = styled.div`
	max-width: 500px;
`;

const selectOptions: IOption[] = [
	{ label: 'Option 1', value: '1' },
	{ label: 'Option 2', value: '2' },
	{ label: 'Option 3', value: '3' },
	{ label: 'Option 4', value: '4' },
	{ label: 'Option 5', value: '5' },
	{ label: 'Option 6', value: '6', disabled: true },
];

export const DismissableSelectInput: ComponentStory<typeof SelectInput> = () => {
	const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

	const handleSelection = useCallback((option: any) => {
		setSelectedOption(option);
	}, []);

	return (
		<Container>
			<SelectInput
				label="Sample Select Input"
				selected={selectedOption}
				options={selectOptions}
				placeholder="Sample"
				onSelection={handleSelection}
			/>
			<span style={{ marginTop: '0.5rem', fontSize: '12px' }}>{`CURRENT SELECTION: ${
				selectedOption?.label || 'NONE'
			}`}</span>
		</Container>
	);
};

export const NonDismissableSelectInput: ComponentStory<typeof SelectInput> = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelection = useCallback((option: any) => {
		setSelectedOption(option);
	}, []);

	return (
		<Container>
			<SelectInput
				label="Sample Select Input"
				selected={selectedOption}
				options={selectOptions}
				placeholder="Sample"
				onSelection={handleSelection}
				dismissable={false}
			/>
		</Container>
	);
};

export const SearchableSelectInput: ComponentStory<typeof SelectInput> = () => {
	const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

	const handleSelection = useCallback((option: any) => {
		setSelectedOption(option);
	}, []);

	return (
		<Container>
			<SelectInput
				searchable
				label="Sample Select Input"
				selected={selectedOption}
				options={selectOptions}
				placeholder="Sample"
				onSelection={handleSelection}
			/>
			<span style={{ marginTop: '0.5rem', fontSize: '12px' }}>{`CURRENT SELECTION: ${
				selectedOption?.label || 'NONE'
			}`}</span>
		</Container>
	);
};
