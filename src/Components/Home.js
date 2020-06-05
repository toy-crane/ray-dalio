import React from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { Heading, Box, Image, Text, Flex } from "rebass";

export const Home = () => {
	let history = useHistory();
	return (
		<Box my={3}>
			<Heading
				fontSize={[2]}
				color="primary"
				fontWeight="bold"
				textAlign="center"
				lineHeight="heading"
			>
				나와 가장 잘 맞는 투자자 찾기 <span>🤓</span>
			</Heading>
			<Text fontSize={[1]} my={1} lineHeight="body">
				워렌 버핏, 레이 달리오, 손정의 등 우리 주변에는 각자만의 색깔로
				투자를 하는 유명한 투자자들이 있습니다. 이 중에 당신은 어떤
				투자자에 가장 가까운지 알아볼까요??
			</Text>
			<Image
				my={3}
				src="https://i.pinimg.com/originals/bb/15/28/bb1528ffb469515a407e81438e9eab9d.jpg"
				sx={{
					borderRadius: 8,
				}}
				opacity={0.8}
			/>
			<Flex justifyContent="center">
				<Button
					my={1}
					onClick={() => history.push("/quizzes")}
					width={3 / 4}
					height={75}
				>
					나와 맞는 투자자 찾아보기
				</Button>
			</Flex>
		</Box>
	);
};
