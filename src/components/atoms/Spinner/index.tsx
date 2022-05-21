import React from 'react';

import colors from '@/design/styles/colors';

import { Container } from './styles';

interface ISpinnerProps {
	size?: number;
	color?: string;
}

const Spinner: React.FC<ISpinnerProps> = ({ size = 24, color = colors.primary }) => {
	return <Container size={size} color={color} />;
};

export default Spinner;
