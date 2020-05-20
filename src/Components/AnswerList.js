import React from "react";
import { Answer } from "./Answer";

export const AnswerList = (props) => {
	const { answers } = props;
	return answers.map((text, index) => <Answer key={index} text={text} />);
};
