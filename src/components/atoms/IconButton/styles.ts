import colors from '@/design/styles/colors';
import styled from 'styled-components';

export const Container = styled.div<{ backgroundColor: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.backgroundColor};
	padding: 0.25em;
	border-radius: 50%;
	min-width: 40px;

	transition: background-color 0.25s ease-in-out;

	&:hover {
		background-color: ${colors.neutral};
	}
`;
