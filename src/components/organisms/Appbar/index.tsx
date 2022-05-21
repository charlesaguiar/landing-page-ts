import { useCallback } from 'react';
import useMenuStore from '@/stores/menuStore';
import { MdMenu } from 'react-icons/md';

import Utilities from './Utilities';

import { Container } from './styles';

const Appbar: React.FC = () => {
	const toggleMenu = useMenuStore(useCallback((s) => s.toggle, []));

	return (
		<Container>
			<MdMenu size={32} onClick={toggleMenu} style={{ cursor: 'pointer' }} />
			<Utilities />
		</Container>
	);
};

export default Appbar;
