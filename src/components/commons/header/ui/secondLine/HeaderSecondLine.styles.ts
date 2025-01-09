import styled from 'styled-components';

export const Wrap = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
`;

export const Nav = styled.nav``;

export const MenuUl = styled.ul`
	display: flex;
	font-size: 1.6rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.gray};
	gap: 0.75rem;

	& * {
		cursor: pointer;
	}

	& *:hover {
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const MenuLi = styled.li`
	font-weight: 700;
	height: 4rem;
	display: flex;
	align-items: center;
	border-bottom: 0.2rem solid transparent;
	box-sizing: border-box;

	&:hover {
		border-color: ${({ theme }) => theme.colors.point};
	}
`;
