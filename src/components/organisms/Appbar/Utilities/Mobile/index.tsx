import { useCallback } from 'react';
import useAuthStore from '@/stores/authStore';

import Avatar from '@/components/atoms/Avatar';
import colors from '@/design/styles/colors';
import { MdAccountCircle, MdSearch, MdHelp, MdLogout, MdExpandMore } from 'react-icons/md';

import { Container, Username, OptionsContainer, Option } from './styles';
import useToggle from '@/hooks/useToggle';

const Mobile: React.FC = () => {
	const logout = useAuthStore(useCallback((s) => s.logout, []));
	const [open, toggleOpen] = useToggle(false);

	return (
		<Container open={open}>
			<div style={{ display: 'flex', gap: '1em' }}>
				<Avatar size={40} initial="C" />
				<Username onClick={() => toggleOpen()}>
					<span>Admin</span>
					<MdExpandMore color={colors.iconGray} size={32} />
				</Username>
			</div>

			{open && (
				<OptionsContainer>
					<Option>
						<MdAccountCircle size={32} color={colors.iconGray} />
						<span>My Profile</span>
					</Option>
					<Option>
						<MdSearch size={32} color={colors.iconGray} />
						<span>Search</span>
					</Option>
					<Option>
						<MdHelp size={32} color={colors.iconGray} />
						<span>Help</span>
					</Option>
					<Option onClick={() => logout()}>
						<MdLogout size={32} color={colors.iconGray} />
						<span>Logout</span>
					</Option>
				</OptionsContainer>
			)}
		</Container>
	);
};

export default Mobile;
