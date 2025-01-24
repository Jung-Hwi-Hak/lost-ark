/**
 * @title 캐릭터 검색 페이지
 *
 * @author 정휘학
 * @since 2025.01.21
 * */
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCharacterDetail } from '@apis/queries/openapi/getCharacterInfo';
import { useEffect, useState } from 'react';

function CharacterPage() {
	const { characterNm } = useParams();

	const { data } = useQuery({
		queryFn: () => getCharacterDetail({ characterNm }),
		queryKey: ['characterNm', characterNm],
		enabled: !!characterNm,
	});

	const [ArmoryProfileS, setArmoryProfileS] = useState<any>();
	const [ArkPassiveS, setArkPassiveS] = useState<any>();

	console.log(data);

	useEffect(() => {
		if (!data) return;
		const { ArmoryProfile, ArkPassive } = data;

		setArmoryProfileS(ArmoryProfile);
		setArkPassiveS(ArkPassive);
		console.log(data);
	}, [data]);

	return (
		<div>
			{data && ArmoryProfileS ? (
				<ul key={characterNm}>
					<li>
						<img src={ArmoryProfileS.CharacterImage} alt="직업 이미지" />
						{ArmoryProfileS.CharacterLevel}
						{ArmoryProfileS.CharacterName}
						{ArmoryProfileS.CharacterClassName}
						{ArmoryProfileS.ItemMaxLevel}
					</li>
					<li style={{ color: '#ffd200' }}>
						{ArkPassiveS.Points[0].Name}:{ArkPassiveS.Points[0].Value}
					</li>
					<li style={{ color: '#a2ccf6' }}>
						{ArkPassiveS.Points[1].Name}:{ArkPassiveS.Points[1].Value}
					</li>
					<li style={{ color: '#d4ff88' }}>
						{ArkPassiveS.Points[2].Name}:{ArkPassiveS.Points[2].Value}
					</li>
				</ul>
			) : (
				'없어'
			)}
		</div>
	);
}

export default CharacterPage;
