import create, { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';

import { ToastSeverity, IToastOptions } from '@/utils/toast';

interface IToastState {
	visible: boolean;
	title: string;
	message: string;
	severity: ToastSeverity;
	duration: number;
	onDismiss?: () => void;
	show: (options: IToastOptions) => void;
	hide: () => void;
}

const show = (dispatch: SetState<IToastState>, options: IToastOptions) =>
	dispatch({ ...options, visible: true });

const hide = (dispatch: SetState<IToastState>) => dispatch({ visible: false });

const useToastStore = create<IToastState>(
	devtools((dispatch) => ({
		visible: false,
		title: 'Title',
		message: 'Message',
		severity: 'success',
		duration: 5000,
		onDismiss: () => {},
		show: (options: IToastOptions) => show(dispatch, options),
		hide: () => hide(dispatch),
	})),
);

export default useToastStore;
