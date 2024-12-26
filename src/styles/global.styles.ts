import styled, { createGlobalStyle } from 'styled-components';

/**
 * reset css 적용
 * */
export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        font: inherit;
        vertical-align: baseline;
				box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

/**
 * header,body,footer 를 감싸는 최초 태그
 * */
export const Wrap = styled.div`
	background-color: ${({ theme }) => theme.background.default};
	display: flex;
	flex-direction: column;
	//overflow-x: hidden;
`;

type MaxWrapType = {
	innerWidth: number;
};

export const MaxWrap = styled.div<MaxWrapType>`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 1336px;
	height: 100vh;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.background.default};
	font-size: 1rem;
	overflow-x: hidden;

	& > * {
		min-width: 1336px;
	}

	/* 노트북 & 테블릿 가로 (해상도 1024px ~ 1335px)*/
	@media all and (max-width: 1024px) {
		position: relative;
		display: flex;
		flex-direction: column;
		//width: 100vw;
		max-width: ${(props) => (props.innerWidth ? `${props.innerWidth}px` : '100%')};
		height: 100vh;
		margin: 0 auto;
		background-color: ${({ theme }) => theme.background.default};
		font-size: 1rem;

		& > * {
			min-width: ${(props) => (props.innerWidth ? `${props.innerWidth}px` : '100px')};
			max-width: ${(props) => (props.innerWidth ? `${props.innerWidth}px` : '100px')};
			background-color: blue;
		}
	}

	/* 테블릿 가로 (해상도 768px ~ 1023px)*/
	// @media all and (min-width: 768px) and (max-width: 979px) {
	// 	position: relative;
	// 	display: flex;
	// 	flex-direction: column;
	// 	width: 768px;
	// 	height: 100vh;
	// 	margin: 0 auto;
	// 	background-color: ${({ theme }) => theme.background.default};
	// 	font-size: 1rem;
	//
	// 	& > * {
	// 		min-width: 768px;
	// 	}
	// }

	/* 모바일 세로 (해상도 ~ 479px)*/
	//@media all and (max-width: 479px) {
	//	//스타일 입력
	//}
`;
