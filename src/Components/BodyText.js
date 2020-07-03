import React from "react";
import Text from "./Text";
import { Flex } from "rebass";
import ShowMore from "react-show-more";
import { useTheme } from "emotion-theming";

const customCSS = (theme) => ({
	"a:visited": {
		color: theme.colors.primary,
		"text-decoration": "none",
	},
	"a:link": {
		color: theme.colors.primary,
		"text-decoration": "none",
	},
	"a:hover": {
		color: theme.colors.deepGray,
	},
});

export const BodyText = (props) => {
	const theme = useTheme();
	return (
		<Flex py={1}>
			<Text css={() => customCSS(theme)}>
				<ShowMore lines={2} more="더 알아보기" less="접기">
					{props.text}
				</ShowMore>
			</Text>
		</Flex>
	);
};
