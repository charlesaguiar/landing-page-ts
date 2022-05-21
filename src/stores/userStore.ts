import create, { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';
import UserService from '@/services/UserService';

import { IUser } from '@/@types';

interface IUserState {
  createUser: (user: IUser) => Promise<void>;
  loading: boolean;
  success: boolean;
  error: any;
}

const createUser = async (set: SetState<IUserState>, user: IUser) => {
  set(() => ({ loading: true }));
  try {
    await UserService.createUser(user);
    set(() => ({ loading: false, success: true }));
  } catch (error) {
    set(() => ({ loading: false, error, success: false }));
  }
};

const store = (set: SetState<IUserState>) => ({
  loading: false,
  success: false,
  error: null,
  createUser: (user: IUser) => createUser(set, user),
});

const useUserStore = create<IUserState>(devtools(store));

export default useUserStore;
