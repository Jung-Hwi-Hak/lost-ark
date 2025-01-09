import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	width: 100%;
	background-color: ${({ theme }) => theme.background.section};
	height: 105px;
`;

export const Container = styled.div`
	margin: 0 auto;
	padding: 0 3.2rem;

	@media (min-width: 1216px) {
		max-width: 1216px;
	}

	& hr {
		position: absolute;
		width: 100%;
		left: 0;
		border: none;
		border-bottom: 0.05rem solid ${({ theme }) => theme.colors.white};
	}
`;
