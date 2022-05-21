import styled from 'styled-components';

import colors from '@/design/styles/colors';
import defaults from '@/design/styles/defaults';

export const UtilitiesContainer = styled.div`
	display: flex;

	@media (max-width: ${defaults.breakpoints.sm}) {
		display: none;
	}
`;

export const IconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	border-right: 1px solid ${colors.border};
	padding: 0.8rem;
`;

export const FloatingMenuContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.8rem;
	gap: 0.5rem;
	cursor: pointer;
	border-radius: 0.25rem;

	transition: ${defaults.hoverBgTransition};

	&:hover {
		background-color: ${colors.border};
	}
`;

export const UsernameContainer = styled.div`
	display: flex;
	align-content: center;
`;
