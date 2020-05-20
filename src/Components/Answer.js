import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";

export const Answer = (props) => {
	const { dispatch } = useContext(PageContext);
	const { text } = props;
	return <button onClick={() => dispatch({ type: "next" })}>{text}</button>;
};
