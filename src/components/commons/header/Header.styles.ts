import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	//width: 1336px;
	width: 100%;
	background-color: ${({ theme }) => theme.background.section};
	height: 105px;
`;
export const Wrap = styled.div`
	width: 1336px;
	margin: 0 auto;
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
	font-size: 1.2rem;
	font-weight: 700;
	color: #767c8d;
	//color: pink;

	& * {
		box-sizing: border-box;
		border-bottom: 1px solid ${({ theme }) => theme.background.default};
		cursor: pointer;
	}

	& *:hover {
		color: #f7f7f7;
		//border-bottom: 1px #50ce97 solid;
	}

	& > li:not(:first-child) {
		margin-left: 3px;
	}
`;

export const NavLi = styled.li``;
