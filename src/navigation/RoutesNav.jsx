import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminPage } from '../pages';

import React from 'react';

const RoutesNav = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<AdminPage />}
				/>
			</Routes>
		</Router>
	);
};

export default RoutesNav;
