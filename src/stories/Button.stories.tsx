import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '@/components/atoms/Button';
import { FaUpload } from 'react-icons/fa';
import colors from '@/design/styles/colors';

export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Container = styled.div`
	max-width: 500px;
`;

export const PrimaryButton: ComponentStory<typeof Button> = () => {
	const handleButtonClick = useCallback(() => alert('Clicked!'), []);

	return (
		<Container>
			<Button variant="primary" onClick={handleButtonClick}>
				Primary
			</Button>
		</Container>
	);
};

export const SecondaryButton: ComponentStory<typeof Button> = () => {
	const handleButtonClick = useCallback(() => alert('Clicked!'), []);

	return (
		<Container>
			<Button variant="secondary" onClick={handleButtonClick}>
				Secondary
			</Button>
		</Container>
	);
};

export const ActiveSecondaryButton: ComponentStory<typeof Button> = () => {
	const handleButtonClick = useCallback(() => alert('Clicked!'), []);

	return (
		<Container>
			<Button variant="secondary" active onClick={handleButtonClick}>
				Secondary
			</Button>
		</Container>
	);
};

export const PrimaryButtonWithIcon: ComponentStory<typeof Button> = () => {
	const handleButtonClick = useCallback(() => alert('Clicked!'), []);

	return (
		<Container>
			<Button variant="primary" onClick={handleButtonClick}>
				<div style={{ display: 'flex', gap: '0.5rem' }}>
					<FaUpload color="white" />
					<span>Upload</span>
				</div>
			</Button>
		</Container>
	);
};

export const SecondaryButtonWithIcon: ComponentStory<typeof Button> = () => {
	const handleButtonClick = useCallback(() => alert('Clicked!'), []);

	return (
		<Container>
			<Button variant="secondary" onClick={handleButtonClick}>
				<div style={{ display: 'flex', gap: '0.5rem' }}>
					<FaUpload color={colors.secondaryText} />
					<span>Upload</span>
				</div>
			</Button>
		</Container>
	);
};
