import styled from 'styled-components';

export const Wrap = styled.div`
	height: 65px;
	display: flex;
	align-items: center;
	border-bottom: 2px solid #101114;
`;

/* 로고 */
export const LogoImg = styled.img.attrs({
	src: '/logo.svg',
	alt: 'logo',
})`
	cursor: pointer;
	margin-right: 5px;
`;

/* 모코코 이미지 */
export const MokokoImg = styled.img.attrs({
	src: '/mokoko.gif',
	alt: 'mokoko',
})`
	width: 40px;
	height: 40px;
`;
