import styled from 'styled-components';

export const Body = styled.div`
	margin: 20rem auto 0 auto;
	//padding: 5rem 3.2rem;
	//background-color: ${({ theme }) => theme.background.section};
	background-color: ${({ theme }) => theme.background.default};
	width: 1216px;
	min-height: 650px;

	@media (min-width: 1216px) {
		max-width: 1216px;
	}

	//@media (max-width: 1216px) and (min-width: 760px) {
	@media (max-width: 1216px) {
		max-width: 760px;
		padding: unset;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	min-height: 500px;
`;

export const SearchWrap = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	z-index: 200;
	height: 100px;
	margin-bottom: 5rem;
`;

export const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SearchBehind = styled.div`
	display: flex;
	position: absolute;
	top: 0.5rem;
	z-index: -1;
	width: 450px;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.background.deep};

	transition:
		padding 0.3s ease,
		opacity 0.5s ease,
		min-height 0.2s ease;

	&.blur {
		padding: 8rem 2.5rem 0 3.5rem;
		opacity: 0;
		max-height: 1px;
		min-height: 1px;

		& .item {
			opacity: 0;
		}
	}

	&.focus {
		padding: 10rem 2.5rem 1rem 3.5rem;
		opacity: 1;
		max-height: 30rem;
		min-height: 20rem;
		& .item {
			opacity: 1;
		}
	}

	& .item {
		transition: opacity 0.1s ease;
		color: ${({ theme }) => theme.fonts.gray100};
		padding: 0.5rem;
		border-left: 2px solid ${({ theme }) => theme.outline.gray};
	}

	& .history {
		width: 50%;
	}

	& .favorites {
		width: 50%;
	}
`;
