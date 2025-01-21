import * as S from '@components/cards/cardList/CardList.styled';
import { BossAndCaosType } from '@components/cards/cardList/CardList.index';

interface IBossAndCaos {
	bossAndCaos: BossAndCaosType;
}

function BossAndCaos({ bossAndCaos }: IBossAndCaos) {
	return (
		<S.ItemListUl className="field">
			<li className="item_title">카게&필보</li>
			<ul>
				{/* 카게 */}
				<li className="item">
					<span className={bossAndCaos.caos.boolean ? '' : 'noop'}>
						<img
							className="icon"
							src="https://cdn-lostark.game.onstove.com/efui_iconatlas/achieve/achieve_13_11.png"
							alt="이미지"
						/>
						{bossAndCaos.caos.boolean ? null : <img className="close" src="./close.svg" alt="close" />}
					</span>
				</li>
				{/* 필보 */}
				<li className="item">
					<span className={bossAndCaos.boss.boolean ? '' : 'noop'}>
						<img
							className="icon"
							src="https://cdn-lostark.game.onstove.com/efui_iconatlas/achieve/achieve_14_142.png"
							alt="이미지"
						/>
						{bossAndCaos.boss.boolean ? null : <img className="close" src="./close.svg" alt="close" />}
					</span>
				</li>
			</ul>
		</S.ItemListUl>
	);
}

export default BossAndCaos;
