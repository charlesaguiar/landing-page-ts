import React from 'react';

import { CheckboxContainer, CheckboxElement, CheckboxLabel } from './styles';

interface ICheckboxProps {
	label?: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({ label }) => {
	return (
		<CheckboxContainer>
			<CheckboxElement type="checkbox" />
			{label && <CheckboxLabel>{label}</CheckboxLabel>}
		</CheckboxContainer>
	);
};

export default Checkbox;
