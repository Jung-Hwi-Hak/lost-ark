import * as React from 'react';
import HomePage from '@pages/Home';
import Error404 from '@pages/Error404';
import MainPage from '@pages/main/MainPage.index';

import { Route, Routes } from 'react-router-dom';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/*" element={<Error404 />} />
			<Route path="/" element={<MainPage />} />
			<Route path="/home/:id" element={<HomePage />} />
			<Route path="/home" element={<HomePage />} />
		</Routes>
	);
}

export default AppRoutes;
