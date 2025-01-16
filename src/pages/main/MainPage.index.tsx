import CardList from '@components/cards/cardList/CardList.index';
import styled from 'styled-components';
import { CardListHooks } from '@components/cards/cardList/CardList.hooks';

function MainPage() {
	const Contents = styled.div`
		display: flex;
		flex-wrap: wrap;
		& > div {
			margin-left: 3rem;
			margin-bottom: 3rem;
		}
	`;

	const { islandS, bossAndCaosS } = CardListHooks();

	return (
		<Contents>
			<CardList title="일정" bossAndCaos={bossAndCaosS} island={islandS} />
			{/*<CardList />*/}
			{/*<CardList />*/}
		</Contents>
	);
}

export default MainPage;
