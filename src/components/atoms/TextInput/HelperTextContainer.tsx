import React from 'react';

import { RiErrorWarningLine } from 'react-icons/ri';
import colors from '@/design/styles/colors';

import { HelpText } from './styles';

interface IHelperTextContainerProps {
	valid?: boolean;
	helpText?: string;
	helpTextIcon?: React.ReactNode;
}

const HelperTextContainer: React.FC<IHelperTextContainerProps> = ({
	valid,
	helpText,
	helpTextIcon,
}) => {
	if (!helpText) {
		return null;
	}

	return (
		<HelpText valid={valid}>
			{valid ? helpTextIcon : <RiErrorWarningLine color={colors.error} />}
			{helpText}
		</HelpText>
	);
};

export default HelperTextContainer;
