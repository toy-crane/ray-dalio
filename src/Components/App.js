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
	padding: 0 0.5rem;
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
