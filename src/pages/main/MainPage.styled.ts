import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: relative;
`;

export const SearchWrap = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 450px;
	margin: 0 auto;
	z-index: 200;
`;

export const SearchBehind = styled.div`
	display: flex;
	position: absolute;
	top: -2rem;
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
