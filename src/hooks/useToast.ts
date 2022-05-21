import { useCallback, useEffect } from 'react';
import useToastStore from '@/stores/toastStore';
import { IToastOptions } from '@/utils/toast';

const useToast = (visible: boolean, options: IToastOptions) => {
	const show = useToastStore(useCallback((s) => s.show, []));
	const hide = useToastStore(useCallback((s) => s.hide, []));

	useEffect(() => {
		if (visible) {
			show({ ...options });
		} else {
			hide();
		}
	}, [visible, options]);
};

export default useToast;
