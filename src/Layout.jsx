import React from 'react';
import './Layout.css';
import { Footer, Home, Navbar, MyTrips } from './components';
import { Route, Routes } from 'react-router-dom';

const Layout = () => {
	return (
		<div className="layout">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="page_content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mytrips" element={<MyTrips />} />
				</Routes>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
