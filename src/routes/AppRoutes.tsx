import * as React from 'react';
import Error404 from '@pages/Error404';
import MainPage from '@pages/main/MainPage.index';

import { Route, Routes } from 'react-router-dom';
import CharacterPage from '@pages/character/CharacterPage.index';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/*" element={<Error404 />} />
			<Route path="/" element={<MainPage />} />
			{/* 캐릭터 검색 라우팅 */}
			<Route path="/character" element={<CharacterPage />} />
			<Route path="/character/:characterNm" element={<CharacterPage />} />
			{/*<Route path="/home/:id" element={<HomePage />} />*/}
			{/*<Route path="/home" element={<HomePage />} />*/}
		</Routes>
	);
}

export default AppRoutes;
