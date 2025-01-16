import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	width: 100%;
	background-color: ${({ theme }) => theme.background.section};
	height: 105px;
	z-index: 999;
`;

export const Container = styled.div`
	margin: 0 auto;
	padding: 0 3.2rem;
	max-width: 1216px;
	/*	@media (min-width: 1216px) {
		max-width: 1216px;
	}

	@media (max-width: 1216px) and (min-width: 760px) {
		max-width: 760px;
		padding: unset;
	}*/

	& hr {
		position: absolute;
		width: 100%;
		left: 0;
		border: none;
		border-bottom: 0.05rem solid ${({ theme }) => theme.fonts.white};
	}
`;
