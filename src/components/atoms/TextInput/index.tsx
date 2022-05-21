import React, { forwardRef, useCallback } from 'react';

import HelperTextContainer from './HelperTextContainer';

import { Container, InputContainer, Input, Label } from './styles';

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
	type: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url';
	label?: string;
	required?: boolean;
	valid?: boolean;
	value?: string;
	helpText?: string;
	helpTextIcon?: React.ReactNode;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	onValueChange?: (value: string) => void;
}

const TextInput = forwardRef<HTMLInputElement, IProps>(
	(
		{
			value,
			onValueChange,
			label,
			required = false,
			valid = true,
			helpText,
			helpTextIcon,
			startIcon,
			endIcon,
			...rest
		},
		ref,
	) => {
		const handleValueChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
			onValueChange?.(e.currentTarget.value);
		}, []);

		return (
			<Container>
				<Label required={required}>{label}</Label>
				<InputContainer
					valid={valid}
					hasStartIcon={Boolean(startIcon)}
					hasEndIcon={Boolean(endIcon)}>
					{startIcon || null}
					<Input ref={ref} value={value} onChange={handleValueChange} {...rest} />
					{endIcon || null}
				</InputContainer>
				<HelperTextContainer valid={valid} helpText={helpText} helpTextIcon={helpTextIcon} />
			</Container>
		);
	},
);

export default TextInput;
