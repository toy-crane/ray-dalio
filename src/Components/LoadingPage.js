import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { PageContext } from "../Context/PageContext";
import { Image, Flex } from "rebass";
import Header from "./Header";

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
		<>
			<Header mb={[1, 2]}>투자 성향 분석중...</Header>
			<Flex justifyContent="center">
				<Image src="/loading.gif" alt="loading..." />
			</Flex>
		</>
	);
};
