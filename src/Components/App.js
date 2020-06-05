import React from "react";
import { Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import { Quiz } from "./Quiz";
import { Home } from "./Home";
import { Result } from "./Result";
import { Head } from "./Head";
import { PageProvider } from "../Context/PageContext";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "../Styles/GlobalStyles";

const theme = {
	fontSizes: [10, 25, 45, 65],
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

const Container = styled.section`
	max-width: 880px;
	margin: 0 auto;
`;

function App() {
	return (
		<>
			<Head />
			<Global styles={GlobalStyles} />
			<PageProvider>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<Container>
							<Switch>
								<Route exact path="/">
									<Home></Home>
								</Route>
								<Route path="/quizzes">
									<Quiz></Quiz>
								</Route>
								<Route path="/result">
									<Result></Result>
								</Route>
							</Switch>
						</Container>
					</BrowserRouter>
				</ThemeProvider>
			</PageProvider>
		</>
	);
}
export default App;
