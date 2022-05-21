import Divider from '@/components/atoms/Divider';
import Logo from '@/components/atoms/Logo';
import PageTitle from '@/components/atoms/PageTitle';

import {
	Container,
	FormContainer,
	HeaderContainer,
	ImageContainer,
	ImageDecorationContainer,
	TitleContainer,
} from './styles';

interface IPublicPagesTemplateProps {
	children: React.ReactNode;
	pageTitle: string;
}

const PublicPagesTemplate: React.FC<IPublicPagesTemplateProps> = ({ children, pageTitle }) => {
	return (
		<Container>
			<FormContainer>
				<HeaderContainer>
					<Logo />
				</HeaderContainer>
				<Divider width="100%" />
				<TitleContainer>
					<PageTitle title={pageTitle} hasEmoji />
				</TitleContainer>
				{children}
			</FormContainer>
			<ImageContainer>
				<ImageDecorationContainer />
			</ImageContainer>
		</Container>
	);
};

export default PublicPagesTemplate;
