import LoginForm from '@/components/organisms/LoginForm';
import PublicPagesTemplate from '@/components/templates/PublicPagesTemplate';

const Login: React.FC = () => {
	return (
		<PublicPagesTemplate pageTitle="Welcome back!">
			<LoginForm />
		</PublicPagesTemplate>
	);
};

export default Login;
