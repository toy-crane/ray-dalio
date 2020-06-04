import React from "react";
import { Answer } from "./Answer";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

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
			{answers.map(({ text, risk_score, period_score }, index) => (
				<Answer
					key={index}
					text={text}
					risk_score={risk_score}
					period_score={period_score}
				/>
			))}
		</StyledButtonList>
	);
};
