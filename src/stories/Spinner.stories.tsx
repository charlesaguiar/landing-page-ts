import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Spinner from '@/components/atoms/Spinner';

export default {
	title: 'Spinner',
	component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Container = styled.div`
	max-width: 500px;
`;

export const SimpleSpinner: ComponentStory<typeof Spinner> = () => {
	return (
		<Container>
			<Spinner size={48} />
		</Container>
	);
};
