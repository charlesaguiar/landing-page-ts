import styled from 'styled-components';
import colors from '@/design/styles/colors';

export const Container = styled.div`
	position: relative;
`;

export const Body = styled.div``;

export const MainContent = styled.main`
	padding: 2rem;
	background-color: ${colors.background};
	height: calc(100vh - var(--appbar-height));
`;
