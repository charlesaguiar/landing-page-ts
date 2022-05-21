import colors from '@/design/styles/colors';
import defaults from '@/design/styles/defaults';
import styled, { css } from 'styled-components';

interface IAnchorLinkProps {
	variant: 'primary' | 'secondary';
}

export const AnchorLink = styled.a<IAnchorLinkProps>`
	text-decoration: none;
	transition: color, text-decoration 150ms ${defaults.cubicBezier};
	cursor: pointer;

	${(props) =>
		props.variant === 'primary' &&
		css`
			color: ${colors.primary};

			&:hover {
				color: ${colors.primaryHover};
			}
		`}

	${(props) =>
		props.variant === 'secondary' &&
		css`
			color: ${colors.secondaryText};
			text-decoration: underline;

			&:hover {
				text-decoration: none;
				color: ${colors.neutral};
			}
		`}
`;
