import SignupForm from '@/components/organisms/SignupForm';
import PublicPagesTemplate from '@/components/templates/PublicPagesTemplate';

const Signup: React.FC = () => {
	return (
		<PublicPagesTemplate pageTitle="Create your Account">
			<SignupForm />
		</PublicPagesTemplate>
	);
};

export default Signup;
