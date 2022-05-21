import api from '@/config/api';

import { IUser } from '@/@types';

const getUserByUsername = async (username: string): Promise<IUser> => {
  const {
    data: [user],
  } = await api.get(`/users?username=${username}`);

  return user as IUser;
};

const getAllUsers = async () => api.get('/users');

const createUser = async (user: IUser) => api.post('/users', { ...user });

const isUsernameAlreadyTaken = async (username: string) => {
  const user = await getUserByUsername(username);
  return Boolean(user);
};

const UserService = {
  getAllUsers,
  getUserByUsername,
  createUser,
  isUsernameAlreadyTaken,
};

export default UserService;
