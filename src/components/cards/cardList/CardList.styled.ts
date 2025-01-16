import styled from 'styled-components';

export const Wrap = styled.div`
	background-color: ${({ theme }) => theme.background.deep};
	min-width: 345px;

	li,
	h2 {
		padding: 1rem 1rem;
	}

	& .item_title {
		font-size: 1.4rem;
		font-weight: 700;
		color: ${({ theme }) => theme.fonts.gray100};
	}
`;

export const CardTitle = styled.h2`
	font-size: 1.4rem;
	font-weight: 900;
	color: ${({ theme }) => theme.fonts.white};
`;

export const ItemListUl = styled.ul`
	border-top: 2px solid ${({ theme }) => theme.background.default};
	margin-bottom: 2rem;

	/* 카게 & 필보 */
	&.field ul {
		display: flex;
		justify-content: space-evenly;
		& li.item {
			position: relative;
			background-color: ${({ theme }) => theme.background.section};
			border-radius: 5px;

			& span img.close {
				position: absolute;
				width: 100%;
				left: 0;
				top: 0;
			}
			& span img.icon {
				width: 50px;
				height: 50px;
			}
			& span.noop {
				opacity: 0.1;
			}
		}
	}

	/* 모험 섬 */
	&.island li.item_title {
		display: flex;
		align-items: center;

		& > img {
			width: 18px;
			margin-left: 0.5rem;
			cursor: pointer;
		}
	}

	&.island ul {
		&:not(:last-child) {
			margin-bottom: 20px;
		}
		display: flex;
		&.weekdays {
			justify-content: space-around;
		}
		& li {
			margin: 0 0.5rem;
			background-color: ${({ theme }) => theme.background.section};
			border-radius: 5px;
			& div {
				display: flex;
				align-items: center;
				padding-bottom: 1rem;
				& img:not(:first-child) {
					margin-left: 10px;
				}
				& img.icon {
					width: 35px;
					height: 35px;
				}
				& img.reward_icon {
					width: 24px;
					height: 24px;
				}
			}

			&.time {
				color: ${({ theme }) => theme.fonts.white};
			}
			&.item span {
				color: ${({ theme }) => theme.fonts.white};
			}
		}
	}
`;
