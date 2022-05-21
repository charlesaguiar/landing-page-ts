import { MdQuestionAnswer, MdSearch, MdHelp, MdExpandMore } from 'react-icons/md';

import Avatar from '@/components/atoms/Avatar';
import IconButton from '@/components/atoms/IconButton';

import {
	IconsContainer,
	FloatingMenuContainer,
	UsernameContainer,
	UtilitiesContainer,
} from './styles';
import colors from '@/design/styles/colors';

const Utilities: React.FC = () => {
	return (
		<UtilitiesContainer>
			<IconsContainer>
				<IconButton icon={<MdSearch color={colors.iconGray} size={24} />} onClick={() => {}} />
				<IconButton
					icon={<MdQuestionAnswer color={colors.iconGray} size={24} />}
					onClick={() => {}}
				/>
				<IconButton icon={<MdHelp color={colors.iconGray} size={24} />} onClick={() => {}} />
			</IconsContainer>
			<FloatingMenuContainer>
				<Avatar size={40} initial="C" />
				<UsernameContainer>
					<span>Admin</span>
					<MdExpandMore color={colors.iconGray} size={24} />
				</UsernameContainer>
			</FloatingMenuContainer>
		</UtilitiesContainer>
	);
};

export default Utilities;
