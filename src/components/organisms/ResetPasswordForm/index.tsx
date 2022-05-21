import Button from '@/components/atoms/Button';
import TextInput from '@/components/atoms/TextInput';

import { Form, InputContainer } from '../LoginForm/styles';

const ResetPasswordForm: React.FC = () => {
	return (
		<Form>
			<InputContainer>
				<TextInput type="text" label="Email Address" required />
			</InputContainer>
			<Button variant="primary" onClick={() => {}}>
				Send Reset Link
			</Button>
		</Form>
	);
};

export default ResetPasswordForm;
