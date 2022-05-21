import { useCallback } from 'react';
import useMenuStore from '@/stores/menuStore';

import { MdChevronLeft } from 'react-icons/md';
import Logo from '@/components/atoms/Logo';

import colors from '@/design/styles/colors';
import Icons from './Icons';

import { Container, MenuItem, MenuLabel, MenuHeader } from './styles';
import MobileUtilitiesMenu from '@/components/organisms/Appbar/Utilities/Mobile';

const MainMenu: React.FC = () => {
	const toggleMenu = useMenuStore(useCallback((s) => s.toggle, []));

	return (
		<Container>
			<MenuHeader>
				<Logo size={48} />
				<MdChevronLeft
					color="white"
					size={32}
					onClick={toggleMenu}
					style={{ marginTop: '-1.5em', cursor: 'pointer' }}
				/>
			</MenuHeader>
			<MobileUtilitiesMenu />
			<MenuItem>
				<Icons.HomeIcon size={32} color={colors.iconGray} />
				<MenuLabel>Home</MenuLabel>
			</MenuItem>
			<MenuItem>
				<Icons.ECommerceIcon size={32} color={colors.iconGray} />
				<MenuLabel>E-Commerce</MenuLabel>
			</MenuItem>
			<MenuItem>
				<Icons.CommunityIcon size={32} color={colors.iconGray} />
				<MenuLabel>Community</MenuLabel>
			</MenuItem>
			<MenuItem>
				<Icons.FinancesIcon size={32} color={colors.iconGray} />
				<MenuLabel>Finance</MenuLabel>
			</MenuItem>
			<MenuItem>
				<Icons.JobSearchIcon size={32} color={colors.iconGray} />
				<MenuLabel>Job Board</MenuLabel>
			</MenuItem>
			<MenuItem>
				<Icons.TasksIcon size={32} color={colors.iconGray} />
				<MenuLabel>Tasks</MenuLabel>
			</MenuItem>
			<MenuItem>
				<Icons.MessagesIcon size={32} color={colors.iconGray} />
				<MenuLabel>Messages</MenuLabel>
			</MenuItem>
			<MenuItem>
				<Icons.InboxIcon size={32} color={colors.iconGray} />
				<MenuLabel>Inbox</MenuLabel>
			</MenuItem>
			<MenuItem>
				<Icons.CalendarIcon size={32} color={colors.iconGray} />
				<MenuLabel>Calendar</MenuLabel>
			</MenuItem>
			<MenuItem>
				<Icons.CampaignsIcon size={32} color={colors.iconGray} />
				<MenuLabel>Campaigns</MenuLabel>
			</MenuItem>
			<MenuItem>
				<Icons.SettingsIcon size={32} color={colors.iconGray} />
				<MenuLabel>Settings</MenuLabel>
			</MenuItem>
			<MenuItem>
				<Icons.UtilitiesIcon size={32} color={colors.iconGray} />
				<MenuLabel>Utilities</MenuLabel>
			</MenuItem>
		</Container>
	);
};

export default MainMenu;
