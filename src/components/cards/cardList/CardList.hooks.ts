import { useEffect, useState } from 'react';
import { BossAndCaosType, IslandType } from '@components/cards/cardList/CardList.index';
import { useQuery } from '@tanstack/react-query';
import { getCalendar } from '@apis/queries/openapi/getCalendar';
import { checkIslandAmTime, isTodayA } from '../../../utils/date';

export const CardListHooks = () => {
	const [bossAndCaosS, setBossAndCaosS] = useState<BossAndCaosType>({
		boss: {
			boolean: false,
		},
		caos: {
			boolean: false,
		},
	});
	const [islandS, setIslandS] = useState<IslandType>({
		weekdays: null,
		am: null,
		pm: null,
	});

	const { data } = useQuery({
		queryFn: () => getCalendar(),
		queryKey: ['getCalendar'],
	});

	const today = new Date();
	const checkWeekend = today.getDay() === 0 || today.getDay() === 6;

	useEffect(() => {
		if (!data) return;
		console.log(data);

		let itemUrl = '';
		let itemName = '';
		let imgUrl = '';
		let contentsName = '';
		let beforeImg = '';
		const weekdaysUpdates: any[] = [];
		const amUpdates: any[] = [];
		const pmUpdates: any[] = [];

		const bossCaosUpdates = {
			caos: { imgUrl: '', boolean: false },
			boss: { imgUrl: '', boolean: false },
		};

		for (let i = 0; i < data.length; i += 1) {
			// 1. Chaos Gate and Field Boss 상태 업데이트
			for (let z = 0; z < data[i].StartTimes.length; z += 1) {
				if (data[i].CategoryName === '카오스게이트' && isTodayA(data[i].StartTimes[z])) {
					bossCaosUpdates.caos.imgUrl = data[i].ContentsIcon;
					bossCaosUpdates.caos.boolean = true;
				}
				if (data[i].CategoryName === '필드보스' && isTodayA(data[i].StartTimes[z])) {
					bossCaosUpdates.boss.imgUrl = data[i].ContentsIcon;
					bossCaosUpdates.boss.boolean = true;
				}
				// 2. Island 처리
				if (data[i].CategoryName === '모험 섬' && isTodayA(data[i].StartTimes[z])) {
					for (let y = 0; y < data[i].RewardItems[0].Items.length; y += 1) {
						const item = data[i].RewardItems[0].Items[y];
						if (item.StartTimes) {
							for (let x = 0; x < item.StartTimes.length; x += 1) {
								if (isTodayA(item.StartTimes[x])) {
									itemUrl = item.Icon;
									imgUrl = data[i].ContentsIcon;
									contentsName = data[i].ContentsName;
									itemName = item.Name;
									// 평일 처리
									if (!checkWeekend && beforeImg !== imgUrl) {
										weekdaysUpdates.push({ imgUrl, itemUrl, contentsName, itemName });
										beforeImg = imgUrl;
									}

									// 주말 처리
									if (checkWeekend && beforeImg !== imgUrl) {
										if (checkIslandAmTime(item.StartTimes[0])) {
											amUpdates.push({ imgUrl, itemUrl, contentsName, itemName });
										} else {
											pmUpdates.push({ imgUrl, itemUrl, contentsName, itemName });
										}
										beforeImg = imgUrl;
									}
								}
							}
						}
					}
				}
			}
		}

		// 상태 한번에 업데이트
		setBossAndCaosS((prevState) => ({
			...prevState,
			caos: {
				...prevState.caos,
				boolean: bossCaosUpdates.caos.boolean,
				imgUrl: bossCaosUpdates.caos.imgUrl,
			},
			boss: {
				...prevState.boss,
				boolean: bossCaosUpdates.boss.boolean,
				imgUrl: bossCaosUpdates.boss.imgUrl,
			},
		}));

		setIslandS((prevState) => ({
			...prevState,
			weekdays: weekdaysUpdates,
			am: amUpdates.length > 1 ? amUpdates : prevState.am,
			pm: pmUpdates.length > 1 ? pmUpdates : prevState.pm,
		}));
		console.log('island ===> ', weekdaysUpdates, amUpdates, pmUpdates);
	}, [data]);

	return {
		bossAndCaosS,
		islandS,
	};
};
