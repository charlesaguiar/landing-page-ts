import colors from '@/design/styles/colors';
import styled from 'styled-components';

type Width = any | string | number;

interface IDividerElementProps {
	width: Width;
}

export const DividerElement = styled.div<IDividerElementProps>`
	width: ${(props) => (props.width instanceof Number ? `${props.width}px` : props.width)};
	border-bottom: 2px solid ${colors.border};
`;
