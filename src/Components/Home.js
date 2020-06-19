import React from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { Box, Image, Flex } from "rebass";
import Header from "./Header";
import Text from "./Text";
import { useEffect } from "react";
import { useContext } from "react";
import { PageContext } from "../Context/PageContext";

export const Home = () => {
	let history = useHistory();
	const { dispatch } = useContext(PageContext);
	useEffect(() => {
		dispatch({ type: "reset" });
	});
	return (
		<Box my={3}>
			<Header mb={1} my={2}>
				나의 투자 성향과 비슷한 투자자 찾기
			</Header>
			<Image
				my={1}
				src="main_pc_intro.png"
				sx={{
					borderRadius: 8,
				}}
			/>
			<Text my={0}>
				워렌 버핏, 레이 달리오, 손정의 등 우리 주변에는 각자만의 색깔로
				투자를 하는 유명한 투자자들이 있습니다. 이 중에 당신은 어떤
				투자자에 가장 가까운지 알아볼까요??
			</Text>
			<Flex justifyContent="center">
				<Button
					onClick={() => history.push("/quizzes")}
					width="300px"
					height="60px"
					m={0}
				>
					나와 맞는 투자자 찾아보기
				</Button>
			</Flex>
		</Box>
	);
};
