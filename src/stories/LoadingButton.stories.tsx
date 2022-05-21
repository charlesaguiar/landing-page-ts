import { useCallback } from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoadingButton from '@/components/molecules/LoadingButton';
import colors from '@/design/styles/colors';

export default {
	title: 'LoadingButton',
	component: LoadingButton,
} as ComponentMeta<typeof LoadingButton>;

const Container = styled.div`
	max-width: 500px;
`;

export const PrimaryLoadingButton: ComponentStory<typeof LoadingButton> = () => {
	const handleButtonClick = useCallback(() => alert('Clicked!'), []);

	return (
		<Container>
			<LoadingButton
				variant="primary"
				onClick={handleButtonClick}
				loading={true}
				loadingText="Loading..."
				spinnerColor={colors.focus}>
				Primary
			</LoadingButton>
		</Container>
	);
};

export const SecondaryLoadingButton: ComponentStory<typeof LoadingButton> = () => {
	const handleButtonClick = useCallback(() => alert('Clicked!'), []);

	return (
		<Container>
			<LoadingButton
				variant="secondary"
				onClick={handleButtonClick}
				loading={true}
				loadingText="Loading...">
				Primary
			</LoadingButton>
		</Container>
	);
};
