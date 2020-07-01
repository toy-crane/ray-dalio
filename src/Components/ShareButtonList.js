import React, { useEffect } from "react";
import { Image, Flex, Link, Box } from "rebass";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FacebookShareButton, TwitterShareButton } from "react-share";

export const ShareButtonList = () => {
	const PATH = window.location.pathname;
	const SHARE_URL = `https://usaant.kr${PATH}`;
	const SHARE_TITLE = "나와 가장 맞는 투자자 알아보기";

	useEffect(() => {
		window.Kakao.init("ddde4ab4c29d7e63d1eeb601ba119198");
		window.Kakao.Link.createScrapButton({
			container: "#kakao-link-btn",
			requestUrl: SHARE_URL,
		});
	}, [SHARE_URL]);
	return (
		<Flex justifyContent="center" my={0}>
			<Box mx="8px">
				<CopyToClipboard text={SHARE_URL}>
					<Link
						variant="nav"
						onClick={() => alert("URL이 복사되었습니다.")}
						sx={{
							cursor: "pointer",
						}}
					>
						<Image
							src={`/icons/url.png`}
							width="48px"
							height="48px"
						/>
					</Link>
				</CopyToClipboard>
			</Box>
			<Box mx="8px">
				<FacebookShareButton url={SHARE_URL} quote={SHARE_TITLE}>
					<Image
						src={`/icons/facebook.png`}
						width="48px"
						height="48px"
					/>
				</FacebookShareButton>
			</Box>
			<Box mx="8px">
				<TwitterShareButton url={SHARE_URL} title={SHARE_TITLE}>
					<Image
						src={`/icons/twitter.png`}
						width="48px"
						height="48px"
					/>
				</TwitterShareButton>
			</Box>
			<Box mx="8px">
				<a id="kakao-link-btn" style={{ cursor: "pointer" }}>
					<Image
						src={`/icons/kakao.png`}
						width="48px"
						height="48px"
					/>
				</a>
			</Box>
		</Flex>
	);
};
