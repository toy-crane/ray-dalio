import { initialState } from "../Context/PageContext";
import { QUIZ_LIST } from "../DataSet/QuizList";
import { SPECIAL_CHARACTER_CODES } from "../DataSet/Character";

const URL_LIST = {
	G: "goldspoon",
	C: "irondragon",
	E: "bigear",
	P: "pyeonggyeongjang",
	B: "departingbus",
	T: "paperfactory",
	Y: "raydalio",
	J: "gub",
	S: "alwaysjejari",
	W: "warren",
	K: "savingking",
	D: "destroyer",
	R: "jessi",
	M: "vision",
};

const getSpecialCharacter = (character_codes) => {
	let characters = [];
	const character_codes_str = character_codes.join("");
	for (const code of SPECIAL_CHARACTER_CODES) {
		const count = (character_codes_str.match(new RegExp(code, "g")) || [])
			.length;
		if (count >= 1) {
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
				return "M";
			} else {
				return "R";
			}
		} else {
			if (period_score > 7) {
				return "W";
			} else {
				return "Y";
			}
		}
	}
};

export const PageReducer = (state, action) => {
	switch (action.type) {
		case "next":
			const new_page = state.page + 1;
			const quiz = QUIZ_LIST[new_page - 1];
			return {
				...state,
				page: new_page,
				risk_score: state.risk_score + parseInt(action.payload.code[1]),
				period_score:
					state.risk_score + parseInt(action.payload.code[2]),
				character_codes: [
					...state.character_codes,
					action.payload.code[0],
				],
				question: quiz ? quiz["question"] : null,
				answers: quiz ? quiz["answers"] : null,
			};
		case "getCharacter":
			const risk_score =
				state.risk_score + parseInt(action.payload.code[1]);
			const period_score =
				state.risk_score + parseInt(action.payload.code[2]);
			const character_codes = [
				...state.character_codes,
				action.payload[0],
			];
			const character = findCharacter(
				risk_score,
				period_score,
				character_codes
			);

			const url = URL_LIST[character];
			return {
				...state,
				risk_score,
				period_score,
				character,
				url,
				page: null,
				character_codes: null,
				question: null,
				answers: null,
			};
		case "reset":
			return initialState;
		default:
			return;
	}
};
