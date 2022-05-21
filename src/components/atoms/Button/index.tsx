import React from 'react';

import { Button as ButtonComponent } from './styles';

export interface IButtonProps {
	type?: 'button' | 'submit' | 'reset';
	children: React.ReactNode;
	variant: 'primary' | 'secondary';
	minHeight?: string;
	minWidth?: string;
	onClick: () => void;
	active?: boolean;
	disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
	type = 'button',
	children,
	variant,
	minHeight,
	minWidth,
	onClick,
	active,
	disabled = false,
}) => {
	return (
		<ButtonComponent
			type={type}
			onClick={onClick}
			variant={variant}
			active={active}
			minHeight={minHeight}
			minWidth={minWidth}
			disabled={disabled}>
			{children}
		</ButtonComponent>
	);
};

export default Button;
