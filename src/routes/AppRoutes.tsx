import * as React from 'react';
import HomePage from '@pages/Home';
import MainPage from '@pages/MainPage';
import Error404 from '@pages/Error404';

import { Route, Routes } from 'react-router-dom';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/*" element={<Error404 />} />
			<Route path="/" element={<MainPage />} />
			<Route path="/home" element={<HomePage />} />
		</Routes>
	);
}

export default AppRoutes;
