import styled, { css } from 'styled-components';
import colors from '@/design/styles/colors';

interface IInputProps extends React.ComponentPropsWithoutRef<'input'> {}

interface IInputContainerProps {
	valid?: boolean;
	hasStartIcon?: boolean;
	hasEndIcon?: boolean;
}

interface IHelperTextProps {
	valid?: boolean;
}

interface ILabelProps {
	required?: boolean;
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;

export const Label = styled.span<ILabelProps>`
	font-size: 0.9rem;

	${(props) =>
		props.required &&
		css`
			&::after {
				content: '*';
				position: absolute;
				color: ${colors.error};
				font-size: 0.9rem;
				margin-left: 0.25rem;
			}
		`}
`;

export const InputContainer = styled.div<IInputContainerProps>`
	display: flex;
	align-items: center;
	border: 1px solid ${(props) => (props.valid ? colors.border : colors.error)};
	border-radius: 0.25rem;
	box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);

	padding-left: ${(props) => props.hasStartIcon && '0.75rem'};
	padding-right: ${(props) => props.hasEndIcon && '0.75rem'};

	&:focus-within {
		border: 1px solid ${(props) => (props.valid ? colors.focus : colors.error)};
	}
`;

export const Input = styled.input<IInputProps>`
	width: 100%;
	outline: none;
	border: none;
	padding: 0.5rem;
	line-height: 1.25rem;
`;

export const HelpText = styled.span<IHelperTextProps>`
	display: flex;
	align-items: center;
	gap: 0.5em;
	color: ${(props) => (props.valid ? colors.secondaryText : colors.error)};
	font-size: 0.75rem;
`;
