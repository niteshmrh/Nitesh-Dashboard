import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./style.css";
import AppRoutes from "../../routes/AppRoutes";

function Layout(props) {
	return (
		<div className="layout-page">
			<div className="side-bar">
				<Sidebar />
			</div>
			<main className="main-body">
				<Header />
				<AppRoutes />
			</main>
		</div>
	);
}

export default Layout;
