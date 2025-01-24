import * as S from '@components/cards/cardList/CardList.styled';
import { IslandType } from '@components/cards/cardList/CardList.index';

interface IIsland {
	island: IslandType;
}

function Island({ island }: IIsland) {
	return (
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
								<img className="reward_icon" src={item.itemUrl} alt="보상 이미지" title={item.itemName} />
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
								<img className="reward_icon" src={item.itemUrl} alt="보상 이미지" title={item.itemName} />
							</li>
						))}
					</ul>
					<ul>
						<li className="time">PM</li>
						{island.pm.map((item) => (
							<li className="item">
								<img className="icon" src={item.imgUrl} alt="섬 이미지" />
								<img className="reward_icon" src={item.itemUrl} alt="보상 이미지" title={item.itemName} />
							</li>
						))}
					</ul>
				</>
			) : null}
		</S.ItemListUl>
	);
}

export default Island;
