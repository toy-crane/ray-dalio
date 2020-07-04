import React from "react";
import styled from "@emotion/styled";
import { mobile, web } from "../Styles/BreakPoints";
const HorizontalLine = styled.hr`
	color: #9e9e9e;
	border: thin solid #9e9e9e;
	display: block;
	margin-bottom: 40px;
	${mobile} {
		width: 70%;
	}
	${web} {
		width: 400px;
	}
`;

export const Line = () => {
	return <HorizontalLine></HorizontalLine>;
};
