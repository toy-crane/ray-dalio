import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import Button from "./Button";
import { useHistory } from "react-router";
import { QUIZ_LIST } from "../Reducer/Page";

export const Answer = (props) => {
	const {
		dispatch,
		state: { page },
	} = useContext(PageContext);
	const { text, code } = props;
	let history = useHistory();
	const onClick = () => {
		if (page < QUIZ_LIST.length) {
			dispatch({ type: "next", payload: { code } });
		} else {
			dispatch({ type: "getCharacter", payload: { code } });
			history.push("/result");
		}
	};
	return (
		<Button onClick={onClick} width={1} mb="10px" height={80}>
			{text}
		</Button>
	);
};
