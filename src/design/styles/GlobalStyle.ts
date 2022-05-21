import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	*, *::after, *::before {
		box-sizing: border-box;
	}
	
	*::-webkit-scrollbar {
		width: 8px;
	}

	*::-webkit-scrollbar-track {
		background-color: #ccc;
		border-radius: 10px;
	}

	*::-webkit-scrollbar-thumb {
		background-color: #988;
		border-radius: 10px;
	}

	:root {
		--appbar-height: 65px;
		--sidebar-width: 250px;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: 'Inter', sans-serif;
		-webkit-font-smoothing: antialiased !important;;
		-moz-osx-font-smoothing: grayscale;
	}
`;

export default GlobalStyles;
