import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Settings from '@/backend/Pages/Settings';
const App: React.FC = () => {
	return (
		<div className="border border-sky-500 p-1.5 rounded">
			<HashRouter>
				<Routes>
					<Route path="/" element={<Settings />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</HashRouter>
		</div>
	);
};

export default App;
