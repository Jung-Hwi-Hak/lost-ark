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

	//width: 1336px;
`;

export const headerSecond = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
`;

/* 메뉴 Wrap */
export const NavWrap = styled.div``;

export const Nav = styled.nav``;

export const NavUl = styled.ul`
	display: flex;
	font-size: 1.6rem;
	font-weight: 700;
	color: #767c8d;
	gap: 0.75rem;
	//color: pink;

	& * {
		//box-sizing: border-box;
		//border-bottom: 1px solid ${({ theme }) => theme.background.default};
		cursor: pointer;
		//font-weight: bold;
	}

	& *:hover {
		color: #f7f7f7;
		//border-bottom: 1px #50ce97 solid;
	}

	//& > li:not(:first-child) {
	//	margin-left: 3px;
	//}
`;

export const NavLi = styled.li`
	font-weight: 700;
	height: 4rem;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #1c1d22;
	box-sizing: border-box;

	&:hover {
		border-color: #d0fda0;
	}
`;
