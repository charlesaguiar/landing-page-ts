import colors from '@/design/styles/colors';
import { Container } from './styles';

interface IIconButtonProps {
	backgroundColor?: string;
	icon: React.ReactNode;
	onClick: () => void;
}

const IconButton: React.FC<IIconButtonProps> = ({
	backgroundColor = colors.border,
	icon,
	onClick,
}) => {
	return (
		<Container backgroundColor={backgroundColor} onClick={onClick}>
			{icon}
		</Container>
	);
};

export default IconButton;
