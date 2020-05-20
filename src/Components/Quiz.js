import React, { useContext } from "react";
import { AnswerList } from "./AnswerList";
import { PageContext, QUIZ_LIST } from "../Context/PageContext";
import { Header } from "./Header";

export const Quiz = () => {
	const {
		state: { page },
	} = useContext(PageContext);
	const question = QUIZ_LIST[page]["question"];
	const answers = QUIZ_LIST[page]["answers"];
	return (
		<>
			<Header></Header>
			<div>{question}</div>
			<AnswerList answers={answers} />
		</>
	);
};
