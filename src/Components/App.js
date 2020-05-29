import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import emotionReset from "emotion-reset";
import { Quiz } from "./Quiz";
import { PageProvider } from "../Context/PageContext";

const theme = {
	fontSizes: [10, 25, 45],
	space: [5, 10, 20, 30, 100],
	lineHeights: {
		heading: 1.25,
		body: 1.5,
	},
	colors: {
		text: "#000",
		background: "#fff",
		primary: "#2F3438",
		secondary: "#35C5F0",
		grey: "#EAEBEF",
		darkgrey: "#525B61",
	},
	buttons: {
		primary: {
			color: "white",
			bg: "primary",
			boxShadow: "0 4px 15px 0 rgba(47,52,56,.15)",
		},
	},
};

const globalCSS = css`
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
`;

const Container = styled.section`
	max-width: 880px;
	margin: 0 auto;
`;

function App() {
	return (
		<>
			<Global styles={globalCSS} />
			<PageProvider>
				<ThemeProvider theme={theme}>
					<Container>
						<Quiz></Quiz>
					</Container>
				</ThemeProvider>
			</PageProvider>
		</>
	);
}
export default App;
