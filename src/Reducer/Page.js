export const QUIZ_LIST = [
	{
		id: 1,
		question: "몇살이니?",
		answers: ["50살보다 많아", "50살보다 작아"],
	},
	{
		id: 3,
		question: "어디 살아?",
		answers: ["강남?", "강북?"],
	},
	{
		id: 4,
		question: "회사가 어디야?",
		answers: ["강남?", "강북?"],
	},
	{
		id: 5,
		question: "남자야 여자야?",
		answers: ["남자", "여자"],
	},
	{
		id: 6,
		question: "테슬라 좋아해?",
		answers: ["갓스크 찬양", "사기꾼 같아"],
	},
];

export const PageReducer = (state, action) => {
	switch (action.type) {
		case "next":
			const new_page = state.page + 1;
			return {
				...state,
				page: new_page,
				question: QUIZ_LIST[new_page]["question"],
				answers: QUIZ_LIST[new_page]["answers"],
			};
		default:
			return;
	}
};
