import React, { createContext, useReducer } from "react";
import PageReducer from "../Reducer/PageReducer";

const initialState = { page: 0 };
const PageContext = createContext(initialState);

function PageProvider(props) {
	const [state, dispatch] = useReducer(PageReducer, initialState);
	return (
		<PageContext.Provider value={{ state, dispatch }}>
			{props.children}
		</PageContext.Provider>
	);
}
export { PageContext, PageProvider };
