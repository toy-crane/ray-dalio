import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import Button from "./Button";
import { QUIZ_LIST } from "../Reducer/Page";
import { useHistory } from "react-router-dom";

export const Answer = (props) => {
	const { dispatch } = useContext(PageContext);
	const { text, risk_score, period_score } = props;
	const onClick = () => {
		dispatch({ type: "next", payload: { risk_score, period_score } });
	};
	return (
		<Button
			onClick={onClick}
			width={1}
			my={1}
			fontSize={1}
			height={100}
			fontWeight="bold"
			lineHeight="body"
			sx={{
				":hover": {
					bg: "secondary",
				},
			}}
		>
			{text}
		</Button>
	);
};
