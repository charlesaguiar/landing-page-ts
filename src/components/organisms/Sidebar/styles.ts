import styled, { css } from 'styled-components';
import colors from '@/design/styles/colors';

export const Container = styled.div<{ open: boolean }>`
	display: flex;
	flex-direction: column;

	position: fixed;
	width: 0;
	height: 100vh;

	z-index: 1;
	top: 0;
	left: 0;

	background-color: ${colors.sidebar};
	overflow-y: auto;
	overflow-x: hidden;

	& > div {
		display: none;
	}

	${(props) =>
		props.open &&
		css`
			width: var(--sidebar-width);
			padding: 0.75rem;
			box-shadow: 10px 0px 10px 5px rgba(0, 0, 0, 0.1);

			& > div {
				display: block;
			}
		`}

	&::-webkit-scrollbar {
		display: none;
	}

	transition: width 0.5s ease-in-out;
`;
