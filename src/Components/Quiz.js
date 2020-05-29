import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import { QuizHeader } from "./QuizHeader";
import { Question } from "./Question";
import { AnswerList } from "./AnswerList";

export const Quiz = () => {
	const {
		state: { question, answers },
	} = useContext(PageContext);
	return (
		<div>
			<QuizHeader />
			<Question question={question}></Question>
			<AnswerList answers={answers}></AnswerList>
		</div>
	);
};
