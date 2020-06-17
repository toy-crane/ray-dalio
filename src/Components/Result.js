import React, { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import { Image } from "rebass";

const SPECIAL_CHARACTER_CODES = [
	"G",
	"D",
	"E",
	"S",
	"P",
	"T",
	"J",
	"B",
	"K",
	"C",
];

const getSpecialCharacter = (character_codes) => {
	let characters = [];
	const character_codes_str = character_codes.join("");
	for (const code of SPECIAL_CHARACTER_CODES) {
		const count = (character_codes_str.match(new RegExp(code, "g")) || [])
			.length;
		if (count > 1) {
			if (count === 2 && code === "G") {
				characters.push(code);
			} else {
				characters.push(code);
			}
		}
	}
	return characters[Math.floor(Math.random() * characters.length)];
};

const findCharacter = (risk_score, period_score, character_codes) => {
	const specialCharacter = getSpecialCharacter(character_codes);
	if (specialCharacter) {
		return specialCharacter;
	} else {
		if (risk_score > 23) {
			if (period_score > 7) {
				return "SON";
			} else {
				return "JESSI";
			}
		} else {
			if (period_score > 7) {
				return "WARREN";
			} else {
				return "RAY";
			}
		}
	}
};

export const Result = () => {
	const {
		state: { risk_score, period_score, character_codes },
	} = useContext(PageContext);
	const character = findCharacter(risk_score, period_score, character_codes);
	return (
		<div>
			<Image
				my={3}
				src={`characters/${character}.png`}
				sx={{
					borderRadius: 8,
				}}
				opacity={0.8}
			/>
			<div>
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
			</div>
		</div>
	);
};
