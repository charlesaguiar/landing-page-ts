import ResetPasswordForm from '@/components/organisms/ResetPasswordForm';
import PublicPagesTemplate from '@/components/templates/PublicPagesTemplate';

const ResetPassword: React.FC = () => {
	return (
		<PublicPagesTemplate pageTitle="Reset your Password">
			<ResetPasswordForm />
		</PublicPagesTemplate>
	);
};

export default ResetPassword;
