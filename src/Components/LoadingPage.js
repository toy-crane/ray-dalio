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
		}, 5000);
		return () => clearTimeout(timer);
	}, [history, url]);

	return (
		<>
			<Header mb={3} mt={3 * 2}>
				투자 성향 분석중...
			</Header>
			<Flex
				justifyContent="center"
				sx={{
					margin: "0 auto",
				}}
				height={["200px", "auto"]}
				width={["200px", "auto"]}
			>
				<Image src="/loading.gif" alt="loading..." />
			</Flex>
		</>
	);
};
