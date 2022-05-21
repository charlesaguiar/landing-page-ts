import React from 'react';

import Button, { IButtonProps } from '@/components/atoms/Button';
import Spinner from '@/components/atoms/Spinner';

import { LoadingContainer } from './styles';

interface ILoadingButtonProps extends IButtonProps {
	loading: boolean;
	spinnerColor?: string;
	spinnerSize?: number;
	loadingText?: string;
}

const LoadingButton: React.FC<ILoadingButtonProps> = (props) => {
	return (
		<Button {...props} disabled={props.loading}>
			{props.loading ? (
				<LoadingContainer>
					<Spinner color={props.spinnerColor} size={props.spinnerSize} />
					{props.loadingText}
				</LoadingContainer>
			) : (
				props.children
			)}
		</Button>
	);
};

export default LoadingButton;
