import styled from 'styled-components';

export const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5em;
	align-items: center;
`;

export const CheckboxElement = styled.input`
	cursor: pointer;
	height: 16px;
	width: 16px;
	outline: none;
`;

export const CheckboxLabel = styled.span`
	font-size: 14px;
`;
