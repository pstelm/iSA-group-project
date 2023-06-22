import React from 'react';
import './Layout.css';
import { Footer, Navbar } from './components';

const Layout = () => {
	return (
		<div className="layout">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="page_content">
				<h1>Main section</h1>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
