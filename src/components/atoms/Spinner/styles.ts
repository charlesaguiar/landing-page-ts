import styled, { css, keyframes } from 'styled-components';

interface ISpinnerProps {
	size?: number;
	color?: string;
}

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

export const Container = styled.div<ISpinnerProps>`
	${(props) => css`
		position: relative;
		width: ${props.size}px;
		height: ${props.size}px;
		background-color: ${props.color};
		background-image: linear-gradient(180deg, transparent 50%, ${props.color} 50%),
			linear-gradient(60deg, white 50%, transparent 50%);

		&::before {
			content: '';
			position: absolute;
			width: calc(${props.size}px - 8px);
			height: calc(${props.size}px - 8px);
			background-color: white;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 50%;
		}
	`};

	animation: ${rotate} 2s linear infinite;
	border-radius: 50%;
`;
