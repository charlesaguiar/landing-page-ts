import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface IMenuState {
	open: boolean;
	toggle: () => void;
}

const useMenuStore = create<IMenuState>(
	devtools((dispatch, getState) => ({
		open: false,
		toggle: () => dispatch({ open: !getState().open }),
	})),
);

export default useMenuStore;
