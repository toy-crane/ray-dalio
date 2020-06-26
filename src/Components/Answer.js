import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import Button from "./Button";
import { QUIZ_LIST } from "../DataSet/QuizList";

export const Answer = (props) => {
	const {
		dispatch,
		state: { page },
	} = useContext(PageContext);
	const { text, code } = props;
	const onClick = () => {
		if (page < QUIZ_LIST.length) {
			dispatch({ type: "next", payload: { code } });
		} else {
			dispatch({ type: "getCharacter", payload: { code } });
		}
	};

	return (
		<Button onClick={onClick} width={1} mb={1} height={80}>
			{text}
		</Button>
	);
};
