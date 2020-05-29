import React from "react";
import { Answer } from "./Answer";
import styled from "@emotion/styled";

const StyledButtonList = styled.div`
	button:last-child {
		margin-bottom: 20px;
	}
	font-family: "Noto Sans KR", sans-serif;
`;

export const AnswerList = (props) => {
	const { answers } = props;
	return (
		<StyledButtonList>
			{answers.map((text, index) => (
				<Answer key={index} text={text} />
			))}
		</StyledButtonList>
	);
};
