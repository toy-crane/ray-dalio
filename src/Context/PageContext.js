import React, { createContext, useReducer } from "react";
import PageReducer from "../Reducer/PageReducer";

const QUIZ_LIST = [
	{
		id: 1,
		question: "몇살이니?",
		answers: ["50살보다 많아", "50살보다 작아"],
	},
	{
		id: 2,
		question: "어디 살아?",
		answers: ["강남?", "강북?"],
	},
];

const initialState = { page: 0, pageCount: QUIZ_LIST.length };
const PageContext = createContext(initialState);

function PageProvider(props) {
	const [state, dispatch] = useReducer(PageReducer, initialState);
	return (
		<PageContext.Provider value={{ state, dispatch }}>
			{props.children}
		</PageContext.Provider>
	);
}
export { PageContext, PageProvider, QUIZ_LIST };
