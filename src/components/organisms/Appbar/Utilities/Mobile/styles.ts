import styled, { css, keyframes } from 'styled-components';
import defaults from '@/design/styles/defaults';
import colors from '@/design/styles/colors';

const collapseAnimation = keyframes`
	from {
		height: 0;
		transform: scale(0);
	}

	to {
		height: 100%;
		transform: scale(100%);
	}
`;

export const Container = styled.div<{ open: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 1rem;

	${(props) =>
		props.open &&
		css`
			border-bottom: 2px solid ${colors.focus};
		`}

	@media (min-width: ${defaults.breakpoints.sm}) {
		display: none;
	}
`;

export const Username = styled.div`
	display: flex;
	align-items: center;
	gap: 1em;
	cursor: pointer;

	& > span {
		font-weight: 500;
		color: ${colors.neutral};
	}
`;

export const OptionsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Option = styled.div`
	display: flex;
	align-items: center;
	gap: 1em;
	padding: 0.75em 0;
	cursor: pointer;

	span {
		font-weight: 500;
		color: ${colors.neutral};
		font-size: 1rem;
		line-height: 1.5715;
	}

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

	animation: ${collapseAnimation} 0.5s forwards;
`;
