import React from "react";
import { Image, Flex, Link } from "rebass";
import Header from "./Header";
import Text from "./Text";
import Button from "./Button";
import { useHistory } from "react-router";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Result = () => {
	let history = useHistory();
	const character = JSON.parse(localStorage.getItem("character"));
	return (
		<>
			<Header>나의 투자 성향과 비슷한 투자자는?</Header>
			<Image my={0} src={`characters/${character}.png`} height="350px" />
			<Text px="50px" my={0}>
				빈틈없고 철저하지만, 은근히 고리타분해서 당신은 양반집
				주인이었을 듯 규칙, 질서 엄청 중요하게 생각해서 사회에 반항해본
				적 없는 천상 양반 남한테 이래라저래라 잔소리 잘함. 근데 본인도
				흠잡을 곳 없이 빠릿하게 행동해서 남들이 딱히 뭐라고도 못함
				이웃집 양반이 농사 안된다고 고민을 털어놔도 딱히 공감은 못
				하지만 어설프게 위로는 함
			</Text>
			<Flex
				justifyContent="center"
				alignContent="center"
				mt="70px"
				mb={0}
			>
				<Text fontSize={0} color="secondary" fontWeight="bold">
					나의 투자 성향 공유하기
				</Text>
			</Flex>
			<Flex justifyContent="center">
				<Button
					onClick={() => {
						history.push("/");
					}}
					width="300px"
					height="60px"
					m={0}
				>
					투자 성향 테스트 다시하기
				</Button>
			</Flex>
			<Flex justifyContent="center" my={0}>
				<CopyToClipboard text="www.lazi.io/investor">
					<Link
						variant="nav"
						onClick={() => alert("URL이 복사되었습니다.")}
						mx="8px"
						sx={{
							cursor: "pointer",
						}}
					>
						<Image
							src={`icons/url.png`}
							width="48px"
							height="48px"
						/>
					</Link>
				</CopyToClipboard>

				<Link variant="nav" href="https://rebassjs.org" mx="8px">
					<Image
						src={`icons/facebook.png`}
						width="48px"
						height="48px"
					/>
				</Link>
				<Link variant="nav" href="https://rebassjs.org" mx="8px">
					<Image
						src={`icons/twitter.png`}
						width="48px"
						height="48px"
					/>
				</Link>
				<Link variant="nav" href="https://rebassjs.org" mx="8px">
					<Image src={`icons/kakao.png`} width="48px" height="48px" />
				</Link>
			</Flex>
			<Flex justifyContent="center" my="20px">
				<iframe
					title="facebook"
					src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fusaant%2F&tabs=timeline&width=500&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=575536876504340"
					width="500"
					height="70"
					style={{ border: "none", overflow: "hidden" }}
					scrolling="no"
					frameborder="0"
					allowTransparency="true"
					allow="encrypted-media"
				></iframe>
			</Flex>
		</>
	);
};
