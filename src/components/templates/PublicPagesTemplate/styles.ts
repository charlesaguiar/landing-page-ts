import styled from 'styled-components';

import AuthImage from '@/assets/images/auth-image.jpg';
import AuthDecorationImage from '@/assets/images/auth-decoration.png';
import defaults from '@/design/styles/defaults';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2em;
`;

export const FormContainer = styled.div`
	width: 50%;

	@media (max-width: ${defaults.mediaQuery.md}) {
		width: 100%;
	}
`;

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 4rem;
	padding: 2rem;
`;

export const ImageContainer = styled.div`
	position: relative;
	height: 100vh;
	width: 50%;
	background-image: url(${AuthImage});
	background-position: center center;
	background-size: cover;

	@media (max-width: ${defaults.mediaQuery.md}) {
		display: none;
	}
`;

export const ImageDecorationContainer = styled.div`
	position: absolute;
	left: -90px;
	top: calc(50% - 90px);
	height: 250px;
	width: 250px;
	background-image: url(${AuthDecorationImage});
	background-position: center center;
	background-size: cover;

	@media (max-width: ${defaults.mediaQuery.lg}) {
		display: none;
	}
`;
