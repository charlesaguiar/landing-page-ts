import { useCallback } from 'react';
import useMenuStore from '@/stores/menuStore';

import MainMenu from '@/components/molecules/MainMenu';
import { Container } from './styles';

const Sidebar: React.FC = () => {
	const open = useMenuStore(useCallback((s) => s.open, []));

	return (
		<Container open={open}>
			<MainMenu />
		</Container>
	);
};

export default Sidebar;
