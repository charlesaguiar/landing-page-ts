import create, { SetState, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

import AuthService from '@/services/AuthService';

import { IUser } from '@/@types';

interface IAuthState {
	user: IUser | null;
	logged: boolean;
	loading: boolean;
	success: boolean;
	error: any;
	login: (username: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	cleanError: () => void;
}

type IAuthPersist = (
	config: StateCreator<IAuthState>,
	options: PersistOptions<IAuthState>,
) => StateCreator<IAuthState>;

const INITIAL_STATE = {
	user: null,
	logged: false,
	loading: false,
	success: false,
	error: null,
};

const login = async (dispatch: SetState<IAuthState>, username: string, password: string) => {
	dispatch(() => ({ loading: true, error: null }));
	try {
		const { user, success } = await AuthService.login(username, password);
		dispatch(() => ({ loading: false, user, logged: true, error: null, success }));
	} catch (error) {
		dispatch(() => ({ loading: false, error, user: null, logged: false, success: false }));
	}
};

const logout = async (dispatch: SetState<IAuthState>) => {
	dispatch(() => ({ loading: true }));
	AuthService.logout();
	dispatch(() => ({ loading: false, user: null, error: null }));
};

const store = (dispatch: SetState<IAuthState>) => ({
	...INITIAL_STATE,
	login: (username: string, password: string) => login(dispatch, username, password),
	logout: () => logout(dispatch),
	cleanError: () => dispatch({ error: null }),
});

const useAuthStore = create<IAuthState>((persist as IAuthPersist)(store, { name: 'auth' }));

export default useAuthStore;
