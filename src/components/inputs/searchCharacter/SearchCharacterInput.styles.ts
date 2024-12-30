import styled from 'styled-components';

export const Input = styled.input`
	width: 385px;
	height: 40px;
	font-weight: 700;
	padding: 0.5rem;
	outline: none;
	background-color: ${({ theme }) => theme.background.section};
	color: #767c8d;

	&:focus {
		caret-color: pink;
		color: pink;
	}
`;
