import React, { createContext, useReducer } from "react";
import { PageReducer, QUIZ_LIST } from "../Reducer/Page";

const initialState = {
	page: 1,
	pageCount: QUIZ_LIST.length,
	question: QUIZ_LIST[0]["question"],
	answers: QUIZ_LIST[0]["answers"],
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
