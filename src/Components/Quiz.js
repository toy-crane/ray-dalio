import React, { useContext } from "react";
import { AnswerList } from "./AnswerList";
import { PageContext } from "../Context/PageContext";
import { Header } from "./Header";



export const Quiz = () => {
	const {
		state: { question, answers },
	} = useContext(PageContext);
	return (
		<div>
			<Header></Header>
			<div>{question}</div>
			<AnswerList answers={answers} />
		</div>
	);
};
