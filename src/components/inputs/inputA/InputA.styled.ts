import styled from 'styled-components';

export const Wrap = styled.div`
	position: relative;
	width: 400px;
	display: flex;
`;

export const Input = styled.input`
	width: 100%;
	height: 50px;
	outline: none;
	background-color: transparent;
	border: 2px solid ${({ theme }) => theme.outline.gray};
	border-radius: 0.5rem;
	padding: 0 1.5rem;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.fonts.white};
`;

export const ItemBox = styled.div`
	position: absolute;
	width: 30%;
	height: 50px;
	display: flex;
	right: 1rem;
	align-items: center;
	justify-content: space-around;
`;

export const Label = styled.div`
	padding: 0.8rem 1.5rem;
	color: ${({ theme }) => theme.fonts.white};
	font-size: 1.2rem;
	font-weight: 700;
	border: 1px solid ${({ theme }) => theme.outline.gray100};
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.background.deep};
	opacity: 0.6;
`;

export const SVG = styled.svg`
	width: 20px;
	height: 20px;
	fill: none;
	color: ${({ theme }) => theme.outline.gray100};
`;
