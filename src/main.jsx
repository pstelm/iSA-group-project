import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// W GitHubie HashRouter zamiast BrowserRouter
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { AuthProvider } from './contexts/AuthContext';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(  <---- TypeScript
ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<BrowserRouter>
		<AuthProvider>
			<Routes>
				<Route path='/*' element={<App />} />
			</Routes>
		</AuthProvider>
	</BrowserRouter>
	// </React.StrictMode>
);
