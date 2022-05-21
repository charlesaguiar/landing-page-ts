import colors from '@/design/styles/colors';
import styled from 'styled-components';

export const Container = styled.div``;

export const MenuHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1em;
	min-height: 100px;
	padding: 0.5em 1rem;
	border-bottom: 2px solid ${colors.focus};

	& > svg {
		transform: scale(1.5);
	}
`;

export const MenuItem = styled.div`
	display: flex;
	align-items: center;
	gap: 1em;
	padding: 0.5em 1rem;
	cursor: pointer;
	margin: 0.75em 0;

	span,
	svg {
		transition: all 0.5s ease-in-out;
	}

	&:hover span,
	&:hover svg {
		color: ${colors.white};
		fill: ${colors.white};
		transform: scale(1.1);
	}
`;

export const MenuLabel = styled.span`
	font-weight: 500;
	color: ${colors.neutral};
	font-size: 1rem;
	line-height: 1.5715;
`;
