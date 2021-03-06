import React, { useEffect } from "react";
import { Image, Flex, Link, Box } from "rebass";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { useScript } from "../hooks/UseScript";

export const ShareButtonList = () => {
	const PATH = window.location.pathname;
	const SHARE_URL = `https://www.usaant.kr${PATH}`;
	const SHARE_TITLE = "나와 가장 맞는 투자자 알아보기";
	const [loaded, error] = useScript(
		"https://developers.kakao.com/sdk/js/kakao.js"
	);

	if (loaded && !error) {
		window.Kakao.init("ddde4ab4c29d7e63d1eeb601ba119198");
	}

	const ShareToKakao = () => {
		window.analytics.track("Kakao Share Button Clicked");
		window.Kakao.Link.sendScrap({
			requestUrl: SHARE_URL,
		});
	};
	useEffect(() => {
		return () => {
			if (loaded) {
				window.Kakao.cleanup();
			}
		};
	}, [SHARE_URL, loaded]);
	return (
		<Flex justifyContent="center" my={0}>
			<Box mx="8px">
				<CopyToClipboard text={SHARE_URL}>
					<Link
						variant="nav"
						onClick={() => {
							window.analytics.track("Clip Board Button Clicked");
							alert("URL이 복사되었습니다.");
						}}
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
				<FacebookShareButton
					url={SHARE_URL}
					quote={SHARE_TITLE}
					beforeOnClick={() => {
						window.analytics.track("Facebook Share Button Clicked");
					}}
				>
					<Image
						src={`/icons/facebook.png`}
						width="48px"
						height="48px"
					/>
				</FacebookShareButton>
			</Box>
			<Box mx="8px">
				<TwitterShareButton
					url={SHARE_URL}
					title={SHARE_TITLE}
					beforeOnClick={() => {
						window.analytics.track("Twitter Share Button Clicked");
					}}
				>
					<Image
						src={`/icons/twitter.png`}
						width="48px"
						height="48px"
					/>
				</TwitterShareButton>
			</Box>
			<Box mx="8px">
				<Link
					id="kakao-link-btn"
					sx={{ cursor: "pointer" }}
					onClick={ShareToKakao}
				>
					<Image
						src={`/icons/kakao.png`}
						width="48px"
						height="48px"
					/>
				</Link>
			</Box>
		</Flex>
	);
};
