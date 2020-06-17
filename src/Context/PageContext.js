import React, { createContext, useReducer } from "react";
import { PageReducer } from "../Reducer/Page";

const initialState = {
	page: 1,
	risk_score: 0,
	period_score: 0,
	character_codes: [],
	character: null,
};
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
