import * as React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import { Quiz } from "./Quiz";
import { PageProvider } from "../Context/PageContext";

function App() {
	return (
		<PageProvider>
			<ThemeProvider theme={Theme}>
				<GlobalStyles />
				<Quiz />
			</ThemeProvider>
		</PageProvider>
	);
}

export default App;
