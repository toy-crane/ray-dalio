import React from "react";
import { Image, Flex, Link } from "rebass";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const HOME_URL = "http://www.usaant.kr";
const SHARE_TITLE = "나와 가장 맞는 투자자 알아보기";
const JS_KEY = "ddde4ab4c29d7e63d1eeb601ba119198";

export const ShareButtonList = () => {
	return (
		<Flex justifyContent="center" my={0}>
			<CopyToClipboard text={HOME_URL}>
				<Link
					variant="nav"
					onClick={() => alert("URL이 복사되었습니다.")}
					mx="8px"
					sx={{
						cursor: "pointer",
					}}
				>
					<Image src={`icons/url.png`} width="48px" height="48px" />
				</Link>
			</CopyToClipboard>
			<FacebookShareButton url={HOME_URL} quote={SHARE_TITLE}>
				<Image src={`icons/facebook.png`} width="48px" height="48px" />
			</FacebookShareButton>
			<TwitterShareButton url={HOME_URL} title={SHARE_TITLE}>
				<Image src={`icons/twitter.png`} width="48px" height="48px" />
			</TwitterShareButton>

			{/* <Link variant="nav" href="https://rebassjs.org" mx="8px">
				<Image src={`icons/facebook.png`} width="48px" height="48px" />
			</Link>
			<Link variant="nav" href="https://rebassjs.org" mx="8px">
				<Image src={`icons/twitter.png`} width="48px" height="48px" />
			</Link>
			<Link variant="nav" href="https://rebassjs.org" mx="8px">
				<Image src={`icons/kakao.png`} width="48px" height="48px" />
			</Link> */}
		</Flex>
	);
};
