import { useState, useRef } from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextInput from '@/components/atoms/TextInput';

import { FaSearch, FaLastfm } from 'react-icons/fa';
import { IoSendSharp } from 'react-icons/io5';

export default {
	title: 'Text Input',
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Container = styled.div`
	max-width: 500px;
`;

export const ControlledInput: ComponentStory<typeof TextInput> = () => {
	const [value, setValue] = useState('');

	return (
		<Container>
			<TextInput
				id="sample"
				name="sample"
				type="text"
				label="Sample"
				placeholder="Sample"
				value={value}
				onValueChange={(v) => setValue(v)}
				required
			/>
		</Container>
	);
};

export const UncontrolledInput: ComponentStory<typeof TextInput> = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<Container>
			<TextInput
				ref={inputRef}
				id="uncontrolled-input"
				name="uncontrolled"
				type="text"
				label="Uncontrolled Input"
				placeholder="Type here..."
			/>
			<button
				type="button"
				style={{ marginTop: '0.5rem' }}
				onClick={() => alert(`ref value: ${inputRef.current?.value || '--'}`)}>
				See value
			</button>
		</Container>
	);
};

export const DisabledInput: ComponentStory<typeof TextInput> = () => {
	const [value, setValue] = useState('');

	return (
		<Container>
			<TextInput
				id="sample"
				name="sample"
				type="text"
				label="Sample"
				placeholder="Sample"
				value={value}
				onValueChange={(v) => setValue(v)}
				required
				disabled
			/>
		</Container>
	);
};

export const InvalidControlledInput: ComponentStory<typeof TextInput> = () => {
	const [value, setValue] = useState('');

	return (
		<Container>
			<TextInput
				id="sample"
				name="sample"
				type="text"
				label="Sample"
				placeholder="Sample"
				value={value}
				onValueChange={(v) => setValue(v)}
				required
				valid={false}
			/>
		</Container>
	);
};

export const InputWithHelperText: ComponentStory<typeof TextInput> = () => {
	const [value, setValue] = useState('');

	return (
		<Container>
			<TextInput
				id="sample-helpertext"
				name="sample"
				type="text"
				label="Sample"
				placeholder="Sample"
				value={value}
				onValueChange={(v) => setValue(v)}
				required
				helpText="This is a helper text with icon!"
				helpTextIcon={<FaLastfm />}
			/>
		</Container>
	);
};

export const InvalidInputWithHelperText: ComponentStory<typeof TextInput> = () => {
	const [value, setValue] = useState('');

	return (
		<Container>
			<TextInput
				id="sample-helpertext"
				name="sample"
				type="text"
				label="Sample"
				placeholder="Sample"
				value={value}
				onValueChange={(v) => setValue(v)}
				required
				valid={false}
				helpText="This is a invalid-state helper text"
			/>
		</Container>
	);
};

export const InputWithStartIcon: ComponentStory<typeof TextInput> = () => {
	const [value, setValue] = useState('');

	return (
		<Container>
			<TextInput
				id="sample-helpertext"
				name="sample"
				type="text"
				label="Sample"
				placeholder="Sample"
				value={value}
				onValueChange={(v) => setValue(v)}
				startIcon={<FaSearch size={20} color="#475569" />}
			/>
		</Container>
	);
};

export const InputWithEndIcon: ComponentStory<typeof TextInput> = () => {
	const [value, setValue] = useState('');

	return (
		<Container>
			<TextInput
				id="sample-helpertext"
				name="sample"
				type="text"
				label="Sample"
				placeholder="Sample"
				value={value}
				onValueChange={(v) => setValue(v)}
				endIcon={<IoSendSharp size={20} color="#475569" />}
			/>
		</Container>
	);
};

export const InputWithStartAndEndIcon: ComponentStory<typeof TextInput> = () => {
	const [value, setValue] = useState('');

	return (
		<Container>
			<TextInput
				id="sample-helpertext"
				name="sample"
				type="text"
				label="Sample"
				placeholder="Sample"
				value={value}
				onValueChange={(v) => setValue(v)}
				startIcon={<FaSearch size={20} color="#475569" />}
				endIcon={<IoSendSharp size={20} color="#475569" />}
			/>
		</Container>
	);
};
