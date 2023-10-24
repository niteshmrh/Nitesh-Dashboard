import React from "react";
import noDataFound from "../../../assets/images/noDataFound.png";
import "./style.css";

function NoUser() {
	return (
		<div className="noDataFound">
			<img src={noDataFound} alt="No Data" />
			<h2> No User Found!</h2>
		</div>
	);
}

export default NoUser;
