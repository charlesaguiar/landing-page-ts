import Appbar from '@/components/organisms/Appbar';
import Sidebar from '@/components/organisms/Sidebar';
import { Container, Body, MainContent } from './styles';

interface IPrivatePagesTemplate {
	children: React.ReactNode;
}

const PrivatePagesTemplate: React.FC<IPrivatePagesTemplate> = ({ children }) => {
	return (
		<Container>
			<Sidebar />
			<Body>
				<Appbar></Appbar>
				<MainContent>{children}</MainContent>
			</Body>
		</Container>
	);
};

export default PrivatePagesTemplate;
