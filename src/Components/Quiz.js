import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import { QuizHeader } from "./QuizHeader";
import { Question } from "./Question";
import { AnswerList } from "./AnswerList";
import { QUIZ_LIST } from "../Reducer/Page";
import { Redirect } from "react-router-dom";

export const Quiz = () => {
	const {
		state: { page, url },
	} = useContext(PageContext);
	const pageCount = QUIZ_LIST.length;
	const hasNextQuiz = page && pageCount >= page;
	if (hasNextQuiz) {
		const { question, answers } = QUIZ_LIST[page - 1];
		return (
			<div>
				<QuizHeader page={page} pageCount={pageCount} />
				<Question my={2} question={question}></Question>
				<AnswerList answers={answers}></AnswerList>
			</div>
		);
	} else {
		return <Redirect to={`result/${url}`} />;
	}
};
