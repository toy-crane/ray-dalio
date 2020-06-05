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
import Theme from "../Styles/Theme";

const Container = styled.section`
	margin: 0 auto;
	text-align: center;
	@media (min-width: 480px) {
		width: 100%;
		font-size: ${(props) => props.theme.fontSizes[0]};
	}
	@media (min-width: 1200px) {
		width: 80%;
	}
`;

function App() {
	return (
		<>
			<PageProvider>
				<ThemeProvider theme={Theme}>
					<Head />
					<Global styles={GlobalStyles} />
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
