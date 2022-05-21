import { useCallback } from 'react';
import useAuthStore from '@/stores/authStore';
import useToast from '@/hooks/useToast';

import colors from '@/design/styles/colors';

import { useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import LoadingButton from '@/components/molecules/LoadingButton';
import Divider from '@/components/atoms/Divider';
import TextInput from '@/components/atoms/TextInput';
import Link from '@/components/atoms/Link';

import Messages from '@/utils/messages';
import { hasError } from '@/utils/error';
import ToastOptions from '@/utils/toast';

import { Form, InputContainer, ActionsContainer, SignupContainer } from './styles';

interface ISignInCredentials {
	username: string;
	password: string;
}

const LoginForm: React.FC = () => {
	const navigate = useNavigate();

	const login = useAuthStore(useCallback((s) => s.login, []));
	const cleanAuthError = useAuthStore(useCallback((s) => s.cleanError, []));
	const loading = useAuthStore(useCallback((s) => s.loading, []));
	const error = useAuthStore(useCallback((s) => s.error, []));

	useToast(hasError(error), {
		...ToastOptions.getErrorToastOptions(error?.message, cleanAuthError),
	});

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<ISignInCredentials>();

	const submitLogin = useCallback(async (credentials: any) => {
		await login(credentials.username, credentials.password);
		navigate('/home');
	}, []);

	return (
		<Form>
			<InputContainer>
				<TextInput
					type="text"
					label="Username"
					valid={!Boolean(errors.username)}
					helpText={errors.username && Messages.errors.register.email}
					{...register('username', { required: true })}
				/>
				<TextInput
					type="password"
					label="Password"
					valid={!Boolean(errors.password)}
					helpText={errors.username && Messages.errors.register.password}
					{...register('password', { required: true })}
				/>
			</InputContainer>

			<ActionsContainer>
				<RouterLink to="/reset-password">
					<Link variant="secondary">Forgot password?</Link>
				</RouterLink>
				<LoadingButton
					variant="primary"
					onClick={handleSubmit(submitLogin)}
					minWidth="130px"
					minHeight="40px"
					loading={loading}
					loadingText="Signing in..."
					spinnerColor={colors.neutral}>
					Sign in
				</LoadingButton>
			</ActionsContainer>

			<Divider width="100%" />

			<SignupContainer>
				Don’t you have an account?{' '}
				<RouterLink to="/signup">
					<Link variant="primary">Sign up</Link>
				</RouterLink>
			</SignupContainer>
		</Form>
	);
};

export default LoginForm;
