import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import { QuizHeader } from "./QuizHeader";
import { Question } from "./Question";
import { AnswerList } from "./AnswerList";
import { QUIZ_LIST } from "../Reducer/Page";

export const Quiz = () => {
	const {
		state: { page },
	} = useContext(PageContext);
	const pageCount = QUIZ_LIST.length;
	const { question, answers } = QUIZ_LIST[page - 1];
	return (
		<div>
			<QuizHeader page={page} pageCount={pageCount} />
			<Question question={question}></Question>
			<AnswerList answers={answers}></AnswerList>
		</div>
	);
};
