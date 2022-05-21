import colors from '@/design/styles/colors';
import styled, { css } from 'styled-components';

interface IOptionsPopoverProps {
	isOpen: boolean;
}

interface IOptionContainerProps {
	disabled?: boolean;
	selected?: boolean;
}

export const Container = styled.div`
	position: relative;
	width: 100%;

	input {
		cursor: pointer;
	}
`;

export const Popover = styled.div<IOptionsPopoverProps>`
	display: ${(props) => (props.isOpen ? 'flex' : 'none')};
	flex-direction: column;

	position: absolute;
	z-index: 10000;
	width: 100%;
	max-height: 200px;
	overflow: auto;

	border: 1px solid ${colors.border};
	border-radius: 0.5rem;
	background-color: ${colors.white};
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
`;

export const OptionContainer = styled.div<IOptionContainerProps>`
	display: flex;
	align-items: center;
	padding: 0.5rem 0.75rem;
	background-color: ${(props) => (props.selected ? colors.selected : colors.white)};
	font-size: 0.8rem;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover,
	&:focus {
		background-color: ${colors.focus};
		color: ${colors.white};
	}

	${(props) =>
		props.disabled &&
		css`
			background-color: ${colors.disabled};
			pointer-events: none;
			cursor: initial;
		`}
`;

export const EndIconsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const SearchContainer = styled.div`
	padding: 0.5rem 0.75rem;
`;
