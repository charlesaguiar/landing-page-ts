export type ToastSeverity = 'error' | 'success' | 'warning' | 'info';

export interface IToastOptions {
	title: string;
	message: string;
	severity: ToastSeverity;
	onDismiss?: () => void;
}

const getErrorToastOptions = (message: string, onDismiss?: () => void): IToastOptions => ({
	title: 'Error',
	message,
	severity: 'error',
	onDismiss,
});

const getSuccessToastOptions = (message: string): IToastOptions => ({
	title: 'Success',
	message,
	severity: 'success',
});

const getWarningToastOptions = (message: string): IToastOptions => ({
	title: 'Warning',
	message,
	severity: 'warning',
});

const getInfoToastOptions = (message: string): IToastOptions => ({
	title: 'Info',
	message,
	severity: 'info',
});

const ToastOptions = {
	getErrorToastOptions,
	getSuccessToastOptions,
	getWarningToastOptions,
	getInfoToastOptions,
};

export default ToastOptions;
