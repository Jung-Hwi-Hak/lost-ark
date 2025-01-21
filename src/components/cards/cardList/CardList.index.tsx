import * as S from '@components/cards/cardList/CardList.styled';
import BossAndCaos from '@components/cards/cardList/bossAndCaos/BossAndCaos.index';
import Island from '@components/cards/cardList/island/Island.index';

export type BossAndCaosType = {
	caos: {
		boolean: boolean;
	};
	boss: {
		boolean: boolean;
	};
};

export type IslandType = {
	weekdays: { imgUrl: string; itemUrl: string; contentsName: string; itemName: string }[] | null;
	am: { imgUrl: string; itemUrl: string; contentsName: string; itemName: string }[] | null;
	pm: { imgUrl: string; itemUrl: string; contentsName: string; itemName: string }[] | null;
};

interface ICardList {
	title: string;
	bossAndCaos?: BossAndCaosType;
	island?: IslandType;
}

function CardList({ title, bossAndCaos, island }: ICardList) {
	return (
		<S.Wrap className="blog-shadow-dreamy">
			<S.CardTitle>{title}</S.CardTitle>
			{/* ================ 필보 & 카게 ================== */}
			{bossAndCaos ? <BossAndCaos bossAndCaos={bossAndCaos} /> : null}
			{/* ================ 모험 섬 ================== */}
			{island ? <Island island={island} /> : null}
		</S.Wrap>
	);
}

export default CardList;
