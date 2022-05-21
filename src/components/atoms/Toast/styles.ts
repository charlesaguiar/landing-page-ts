import styled, { keyframes } from 'styled-components';

import colors from '@/design/styles/colors';
import defaults from '@/design/styles/defaults';

import { ToastSeverity } from '@/utils/toast';

const getBorderColor = (severity: ToastSeverity) => {
	switch (severity) {
		case 'success':
			return colors.success;
		case 'info':
			return colors.info;
		case 'error':
			return colors.error;
		case 'warning':
			return colors.warning;
	}
};

const toastShowup = keyframes`
	0% {
		transform: translateY(100%);
	}

	50% {
		transform: translateY(-25%);
	}

	100% {
		transform: translateY(0%);
	}
`;

export const Container = styled.div<{ severity: ToastSeverity }>`
	position: fixed;
	z-index: 999;
	bottom: 1em;
	left: 1em;
	padding: 0.5rem 0.75rem;

	border: 1px solid ${colors.border};
	border-top: 3px solid ${(props) => getBorderColor(props.severity)};
	border-radius: 0.25em;

	box-shadow: ${defaults.boxShadow};

	animation: ${toastShowup} 1s forwards;
`;

export const Title = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Message = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: center;
	margin-top: 1rem;
`;
