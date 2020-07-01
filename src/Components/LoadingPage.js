import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { PageContext } from "../Context/PageContext";
import { Image, Flex } from "rebass";

export const LoadingPage = () => {
	let history = useHistory();
	const {
		state: { url },
	} = useContext(PageContext);

	useEffect(() => {
		const timer = setTimeout(() => {
			history.push(`/result/${url}`);
		}, 4000);
		return () => clearTimeout(timer);
	}, [history, url]);

	return (
		<Flex justifyContent="center">
			<Image src="/loading.gif" alt="loading..." />
		</Flex>
	);
};
