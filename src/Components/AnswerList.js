import React from "react";
import { Answer } from "./Answer";
import styled from "@emotion/styled";

const StyledButtonList = styled.div`
	button:last-child {
		margin-bottom: 20px;
	}
`;

export const AnswerList = (props) => {
	const { answers } = props;
	return (
		<StyledButtonList>
			{answers.map(({ text, code }, index) => (
				<Answer key={index} text={text} code={code} />
			))}
		</StyledButtonList>
	);
};
