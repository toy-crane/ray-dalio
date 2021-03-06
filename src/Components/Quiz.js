import React, { useContext, useEffect } from "react";
import { PageContext } from "../Context/PageContext";
import { QuizHeader } from "./QuizHeader";
import { Question } from "./Question";
import { AnswerList } from "./AnswerList";
import { Redirect } from "react-router-dom";
import { QUIZ_LIST } from "../DataSet/QuizList";

export const Quiz = () => {
	const {
		state: { page },
	} = useContext(PageContext);
	useEffect(() => {
		window.analytics.page();
	});
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
		window.analytics.track("Quiz Completed");
		return <Redirect to="loading" />;
	}
};
