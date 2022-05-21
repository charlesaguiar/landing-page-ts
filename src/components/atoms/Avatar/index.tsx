import colors from '@/design/styles/colors';

import { Container } from './styles';

interface IAvatarProps {
	size?: number;
	color?: string;
	initial: string;
}

const Avatar: React.FC<IAvatarProps> = ({ size = 32, color = colors.primary, initial }) => {
	return (
		<Container size={size} color={color}>
			{initial}
		</Container>
	);
};

export default Avatar;
