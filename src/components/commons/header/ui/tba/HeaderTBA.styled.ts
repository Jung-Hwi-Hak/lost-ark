import styled from 'styled-components';

export const Wrap = styled.div`
	position: absolute;
	left: 0;
	width: 100%;
	background-color: ${({ theme }) => theme.background.deep};
	height: 4rem;
	z-index: -1;
`;

export const TbaBox = styled.div`
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.white};

	font-size: 1.4rem;
	font-weight: 900;
`;

export const TbaPoint = styled.div`
	background-color: ${({ theme }) => theme.background.point};
	border-radius: 2rem;
	height: 2rem;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1rem;
	& span {
		color: #000;
	}
`;
