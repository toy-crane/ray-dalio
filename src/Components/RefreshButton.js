import React from "react";
import { Flex } from "rebass";
import Button from "./Button";
import { useHistory } from "react-router";

export const RefreshButton = () => {
	let history = useHistory();
	return (
		<Flex justifyContent="center">
			<Button
				onClick={() => {
					window.analytics.track("Refresh Button Clicked");
					history.push("/");
				}}
				width="300px"
				height="60px"
				m={0}
			>
				투자 성향 테스트 다시하기
			</Button>
		</Flex>
	);
};
