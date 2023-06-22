import React from 'react';
import './Layout.css';

const Layout = () => {
	return (
		<div className="layout">
			<div className="navbar">Navbar (logo + menu button)</div>
			<div className="page_content">
				<h1>Main section</h1>
			</div>
			<div className="footer">Footer (secondary navigation?)</div>
		</div>
	);
};

export default Layout;
