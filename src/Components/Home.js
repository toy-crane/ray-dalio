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
		window.analytics.page();
		dispatch({ type: "reset" });
	});
	return (
		<Box>
			<Header mb={[1, 2]}>나와 비슷한 성향의 투자자는?</Header>
			<Image
				src="/main.jpg"
				sx={{
					borderRadius: 8,
				}}
			/>
			<Text my={[3, 1]} p={[1, 2]}>
				버크셔 헤서웨이의 워렌 버핏, 브릿지 워터의 레이 달리오, 소프트
				뱅크의 손정의 등 많은 거물 투자자들이 자신만의 색깔로 전세계를
				대상으로 많은 돈을 벌어들이고 있습니다. 여러분은 어떤 투자자와 비슷한
				성향을 지녔는지 알아볼까요?
			</Text>
			<Flex justifyContent="center" fontSize={2}>
				<Button
					onClick={() => {
						window.analytics.track(
							"Seeking Investor Button Clicked"
						);
						history.push("/quizzes");
					}}
					width={[1, "300px"]}
					height="60px"
					m={0}
				>
					나와 맞는 투자자 찾아보기
				</Button>
			</Flex>
		</Box>
	);
};
