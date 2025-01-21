/**
 * @title 홈페이지
 * */

import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCharacterSiblings } from '@apis/queries/openapi/getCharacterInfo';
import { useNavigate, useParams } from 'react-router-dom';

function HomePage() {
	const navigate = useNavigate();

	const { id } = useParams();

	const [searchUserNm, setSearchUserNm] = useState<string>('');

	// ==============================
	// 유저 모든 캐릭터 정보 Query
	// ==============================
	const { data } = useQuery({
		queryFn: () => getCharacterSiblings({ characterNm: searchUserNm }),
		queryKey: ['searchUserNm', searchUserNm],
		enabled: !!searchUserNm,
	});

	useEffect(() => {
		if (id) {
			setSearchUserNm(id);
		}
	}, [id]);

	const handleMemoCheck = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (e.target[0].value) {
			navigate(`/home/${e.target[0].value}`);
		}
	};

	if (!id) {
		return <div>헿....</div>;
	}

	return (
		<div>
			{data?.length > 0 ? (
				<ul>
					{data.map((userInfo: any) => (
						<li>{userInfo.CharacterName}</li>
					))}
				</ul>
			) : null}
			<form onSubmit={handleMemoCheck}>
				<input type="text" />
				<button type="submit">검색</button>
			</form>
		</div>
	);
}

export default HomePage;
