import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import useAuthStore from '@/stores/authStore';

import LocalStorageService from '@/services/LocalStorageService';

import Constants from '@/utils/constants';

import Login from '@/pages/public/Login';
import Signup from '@/pages/public/Signup';
import ResetPassword from '@/pages/public/ResetPassword';

import Main from '@/pages/private/Main';
import Toast from '@/components/atoms/Toast';

const App: React.FC = () => {
	const user = useAuthStore(useCallback((s) => s.user, []));
	const [logged, setLogged] = useState(false);

	useEffect(() => {
		setLogged(Boolean(LocalStorageService.getItem(Constants.LOGGED_USER_KEY)));
	}, [user]);

	return (
		<BrowserRouter>
			<Toast />
			{!logged ? (
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/reset-password" element={<ResetPassword />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/" element={<Main />}>
						<Route path="home" element={<span>home</span>} />
					</Route>
					<Route path="*" element={<Navigate to="/home" />} />
				</Routes>
			)}
		</BrowserRouter>
	);
};

export default App;
