import styled from 'styled-components';

import colors from '@/design/styles/colors';
import defaults from '@/design/styles/defaults';

export const Container = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	height: 65px;
	border-bottom: 1px solid ${colors.border};
	box-shadow: ${defaults.boxShadow};
	padding: 0 2rem;
	background-color: ${colors.appbar};
`;
