/* eslint-disable react/destructuring-assignment, no-redeclare, react/require-default-props */
import * as S from '@components/cards/cardList/CardList.styled';

export type BossAndCaosType = {
	caos: {
		boolean: boolean;
	};
	boss: {
		boolean: boolean;
	};
};

export type IslandType = {
	weekdays: { imgUrl: string; itemUrl: string; contentsName: string }[] | null;
	am: { imgUrl: string; itemUrl: string; contentsName: string }[] | null;
	pm: { imgUrl: string; itemUrl: string; contentsName: string }[] | null;
};

interface CardList {
	title: string;
	bossAndCaos?: BossAndCaosType;
	island?: IslandType;
}

function CardList({ title, bossAndCaos, island }: CardList) {
	return (
		<S.Wrap>
			<S.CardTitle>{title}</S.CardTitle>
			{/* ================ 필보 & 카게 ================== */}
			{bossAndCaos ? (
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
			) : null}
			{/* ================ 모험 섬 ================== */}
			{island ? (
				<S.ItemListUl className="island">
					<li className="item_title">
						<span>모험 섬</span>
						<img
							src="./help.svg"
							alt="도움 아이콘"
							title="[평일]&#10;11:00, 13:00, 15:00, 17:00, 19:00 21:00&#10;|&#10;[주말]&#10;AM : 09:00, 11:00, 13:00&#10;PM : 19:00, 21:00, 23:00"
						/>
					</li>
					{/* 평일 */}
					{island.weekdays ? (
						<ul className="weekdays">
							{island.weekdays.map((item) => (
								<li className="item">
									<div>
										<img className="icon" src={item.imgUrl} alt="섬 이미지" />
										<img className="reward_icon" src={item.itemUrl} alt="보상 이미지" />
									</div>
									<span>{item.contentsName}</span>
								</li>
							))}
						</ul>
					) : null}

					{/* 주말 */}
					{island.am ? (
						<>
							<ul>
								<li className="time">AM</li>
								{island.am.map((item) => (
									<li className="item">
										<img className="icon" src={item.imgUrl} alt="섬 이미지" />
										<img className="reward_icon" src={item.itemUrl} alt="보상 이미지" />
									</li>
								))}
							</ul>
							<ul>
								<li className="time">PM</li>
								{island.pm.map((item) => (
									<li className="item">
										<img className="icon" src={item.imgUrl} alt="섬 이미지" />
										<img className="reward_icon" src={item.itemUrl} alt="보상 이미지" />
									</li>
								))}
							</ul>
						</>
					) : null}
				</S.ItemListUl>
			) : null}
		</S.Wrap>
	);
}

export default CardList;
