import { css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";

export default css`
	@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap");
	${emotionNormalize}
	html,
    body {
		font-family: "Noto Sans KR";
	}
	*,
	*::after,
	*::before {
		box-sizing: border-box;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}
	button:focus {
		outline: 0;
	}
`;
