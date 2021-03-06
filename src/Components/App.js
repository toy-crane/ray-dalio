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
import { mobile, web } from "../Styles/BreakPoints";
import { Redirect } from "react-router-dom";
import Theme from "../Styles/Theme";
import { LoadingPage } from "./LoadingPage";

const Container = styled.section`
	padding: 0 0.5rem;
	${mobile} {
		margin-top: 40px;
		min-width: 320px;
		width: 100%;
	}
	${web} {
		margin: 0 auto;
		margin-top: 80px;
		padding: 0 212px;
		max-width: 1024px;
	}
`;

function App() {
	return (
		<>
			<PageProvider>
				<ThemeProvider theme={Theme}>
					<BrowserRouter>
						<Head />
						<Global styles={GlobalStyles} />
						<Container>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/quizzes" component={Quiz} />
								<Route
									path="/loading"
									component={LoadingPage}
								/>
								<Route
									path="/result/:code"
									component={Result}
								/>
								<Route path="/">
									<Redirect to="/"></Redirect>
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
