import React, { useContext } from "react";
import { AnswerList } from "./AnswerList";
import { PageContext } from "../Context/PageContext";

const QUIZ_LIST = [
	{
		id: 1,
		question: "몇살이니?",
		answers: ["50살보다 많아", "50살보다 작아"],
	},
	{
		id: 2,
		question: "어디 살아?",
		answers: ["강남?", "강북?"],
	},
];

export const Quiz = () => {
	const {
		state: { page },
	} = useContext(PageContext);
	const question = QUIZ_LIST[page]["question"];
	const answers = QUIZ_LIST[page]["answers"];
	return (
		<>
			<div>{question}</div>
			<AnswerList answers={answers} />
		</>
	);
};
