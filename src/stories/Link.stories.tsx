import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Link from '@/components/atoms/Link';

export default {
	title: 'Link',
	component: Link,
} as ComponentMeta<typeof Link>;

const Container = styled.div`
	max-width: 500px;
`;

export const PrimaryLink: ComponentStory<typeof Link> = () => {
	return (
		<Container>
			<Link variant="primary" href="https://www.youtube.com/" target="_blank">
				Go to Youtube
			</Link>
		</Container>
	);
};

export const SecondaryLink: ComponentStory<typeof Link> = () => {
	return (
		<Container>
			<Link variant="secondary" href="https://www.youtube.com/" target="_blank">
				Go to Youtube
			</Link>
		</Container>
	);
};
