import * as React from "react";
import GlobalStyles from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<div>Hi, I'm an app!</div>
		</ThemeProvider>
	);
}

export default App;
