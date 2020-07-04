import React from "react";
import Text from "./Text";
import { Flex } from "rebass";
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
		<Flex px={1}>
			<Text css={() => customCSS(theme)}>{props.text}</Text>
		</Flex>
	);
};
