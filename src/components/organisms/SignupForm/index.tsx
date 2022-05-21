import { Link as RouterLink } from 'react-router-dom';

import Button from '@/components/atoms/Button';
import Checkbox from '@/components/atoms/Checkbox';
import Divider from '@/components/atoms/Divider';
import SelectInput from '@/components/atoms/SelectInput';
import TextInput from '@/components/atoms/TextInput';
import Link from '@/components/atoms/Link';

import { ActionsContainer, Form, InputContainer, SignupContainer } from '../LoginForm/styles';
import Constants from '@/utils/constants';

const SignupForm: React.FC = () => {
	return (
		<Form>
			<InputContainer>
				<TextInput type="text" label="Email Address" required />
				<TextInput type="text" label="Full Name" required />
				<SelectInput
					label="Your Role"
					selected={null}
					options={Constants.OCCUPATIONS}
					placeholder="Select..."
					onSelection={() => {}}
					required
				/>
				<TextInput type="password" label="Password" required />
			</InputContainer>

			<ActionsContainer>
				<Checkbox label="Email me about product news" />
				<Button variant="primary" onClick={() => console.log('Sign In')}>
					Sign up
				</Button>
			</ActionsContainer>

			<Divider width="100%" />

			<SignupContainer>
				Already have an account?{' '}
				<RouterLink to="/login">
					<Link variant="primary">Sign in</Link>
				</RouterLink>
			</SignupContainer>
		</Form>
	);
};

export default SignupForm;
