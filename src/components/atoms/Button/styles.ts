import colors from '@/design/styles/colors';
import defaults from '@/design/styles/defaults';
import styled, { css } from 'styled-components';

interface IButtonProps {
	variant: 'primary' | 'secondary';
	active?: boolean;
	minHeight?: string;
	minWidth?: string;
}

export const Button = styled.button<IButtonProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	font-size: 1rem;
	font-weight: 600;

	border: none;
	outline: none;
	padding: 0.5rem 0.75rem;
	border-radius: 0.25rem;
	box-shadow: ${defaults.boxShadow};

	cursor: pointer;

	min-width: ${(props) => props.minWidth || 'auto'};
	min-height: ${(props) => props.minHeight || 'auto'};

	transition: background-color 150ms ${defaults.cubicBezier};

	${(props) =>
		props.variant === 'primary' &&
		css`
			background-color: ${colors.primary};
			color: ${colors.white};

			&:hover {
				background-color: ${colors.primaryHover};
			}
		`}

	${(props) =>
		props.variant === 'secondary' &&
		css`
			background-color: transparent;
			border: 1px solid ${colors.border};
			color: ${props.active ? colors.primary : colors.secondaryText};

			&:hover {
				background-color: ${colors.border};
			}
		`}

	&:disabled {
		background-color: ${colors.disabled};
		pointer-events: none;
		color: ${colors.neutral};
	}
`;
