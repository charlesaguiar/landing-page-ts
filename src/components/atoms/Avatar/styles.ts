import styled, { css } from 'styled-components';

import colors from '@/design/styles/colors';

export const Container = styled.div<{ size: number; color: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	color: ${colors.white};
	font-weight: 600;
	font-size: 1.5rem;

	${({ size, color }) => css`
		width: ${size}px;
		height: ${size}px;
		background-color: ${color};
	`};
`;
