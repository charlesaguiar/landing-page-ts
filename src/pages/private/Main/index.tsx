import { Outlet } from 'react-router-dom';
import PrivatePagesTemplate from '@/components/templates/PrivatePagesTemplate';

const Main: React.FC = () => {
	return (
		<PrivatePagesTemplate>
			<Outlet />
		</PrivatePagesTemplate>
	);
};

export default Main;
