import React, { useEffect } from "react";
import { Image, Flex, Link, Box } from "rebass";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const HOME_URL = "http://www.usaant.kr";
const SHARE_TITLE = "나와 가장 맞는 투자자 알아보기";

export const ShareButtonList = () => {
	function sendLink() {
		window.Kakao.init("ddde4ab4c29d7e63d1eeb601ba119198");
		window.Kakao.Link.sendCustom({
			templateId: 30926,
			templateArgs: {
				title: "테스트",
				description: "설명 영역입니다.",
			},
		});
	}
	return (
		<Flex justifyContent="center" my={0}>
			<Box mx="8px">
				<CopyToClipboard text={HOME_URL}>
					<Link
						variant="nav"
						onClick={() => alert("URL이 복사되었습니다.")}
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
			</Box>
			<Box mx="8px">
				<FacebookShareButton url={HOME_URL} quote={SHARE_TITLE}>
					<Image
						src={`icons/facebook.png`}
						width="48px"
						height="48px"
					/>
				</FacebookShareButton>
			</Box>
			<Box mx="8px">
				<TwitterShareButton url={HOME_URL} title={SHARE_TITLE}>
					<Image
						src={`icons/twitter.png`}
						width="48px"
						height="48px"
					/>
				</TwitterShareButton>
			</Box>
			<Box mx="8px">
				<Link
					variant="nav"
					onClick={sendLink}
					sx={{
						cursor: "pointer",
					}}
				>
					<Image src={`icons/kakao.png`} width="48px" height="48px" />
				</Link>
			</Box>
		</Flex>
	);
};
