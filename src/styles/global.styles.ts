import styled, { createGlobalStyle } from 'styled-components';

/**
 * reset css 적용
 * */
export const GlobalStyles = createGlobalStyle`
    /* 전체 스크롤바 */
    ::-webkit-scrollbar {
        width: 12px; /* 세로 스크롤바의 너비 */
        height: 12px; /* 가로 스크롤바의 높이 */
    }

    /* 스크롤바의 배경 */
    ::-webkit-scrollbar-track {
        background-color: #1C1D22;
				//border-radius: 5px;
				//margin: 0.5rem 0;
    }

    /* 스크롤바의 핸들 (끌어당기는 부분) */
    ::-webkit-scrollbar-thumb {
        background-color: #D0FDA0; /* 핸들의 기본 색상 */
        border-radius: 5px;
        border: 3px solid #1C1D22; /* 핸들 주변의 여백 */
    }

		.box_shadow{
        box-shadow: 0 5px 10px -5px;
		}
    .blog-shadow-dreamy {
        box-shadow: 0 1px 2px rgba(0,0,0,0.07),
        0 2px 4px rgba(0,0,0,0.07),
        0 4px 8px rgba(0,0,0,0.07),
        0 8px 16px rgba(0,0,0,0.07),
        0 16px 32px rgba(0,0,0,0.07),
        0 32px 64px rgba(0,0,0,0.07);
    }
		*{
				font-family: "Nanum Gothic" ,sans-serif;
		}
    html{
				font-size: 10px;
				background-color: #121518;
		}
		hr{
				margin: 0;
		}
		
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
    time, mark, audio, video,input {
        margin: 0;
        padding: 0;
        border: 0;
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
`;
