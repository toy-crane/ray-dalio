import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";

export const Result = () => {
	const {
		state: { risk_score, period_score },
	} = useContext(PageContext);
	return (
		<div>
			결과 페이지입니다. {risk_score} {period_score}
		</div>
	);
};
