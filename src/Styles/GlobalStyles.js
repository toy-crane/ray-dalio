import { css } from "@emotion/core";
import { sm, md } from "../Styles/BreakPoints";
import emotionReset from "emotion-reset";

export default css`
	@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap");
	${emotionReset}
	*, *::after, *::before {
		box-sizing: border-box;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}
	button:focus {
		outline: 0;
	}
	body {
		font-family: "Noto Sans KR";
		${sm} {
			width: 100%;
			font-size: 18px;
		}
		${md} {
			margin: 0 auto;
			max-width: 600px;
			font-size: 18px;
		}
	}
`;
