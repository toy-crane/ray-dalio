export const QUIZ_LIST = [
	{
		id: 1,
		question: "부자가 되기 위해서 내가 해야 할 일?",
		answers: [
			{
				risk_score: 1,
				period_score: 1,
				text: "회사 내에서 인정받고, 최고가 된다.",
			},
			{
				risk_score: 2,
				period_score: 2,
				text: "회사로는 부족하다. 나만의 회사를 차리고, 사업을 한다.",
			},
			{
				risk_score: 3,
				period_score: 3,
				text: "내가 아닌, 돈이 일할 수 있도록 최적의 투자처를 찾는다.",
			},
			{ risk_score: 4, period_score: 4, text: "로또를 산다." },
		],
	},
	{
		id: 2,
		question:
			"현재 투자하고 있는 금융 자산의 비중은 (부동산 제외) 어떻게 되는가?",
		answers: [
			{ risk_score: 1, period_score: 1, text: "0~10%" },
			{ risk_score: 2, period_score: 2, text: "10~30%" },
			{ risk_score: 3, period_score: 3, text: "30~50%" },
			{ risk_score: 4, period_score: 4, text: "50~100%" },
		],
	},
	{
		id: 3,
		question: "돈을 모을 때 바라는 연 수익률은?",
		answers: [
			{
				risk_score: 1,
				period_score: 1,
				text: "원금이 보장되는 선에서 예금 보단 조금 높은 3~4%면 된다.",
			},
			{
				risk_score: 2,
				period_score: 2,
				text: "원금이 보장 되지 않더라도 5~8%면 된다.",
			},
			{
				risk_score: 3,
				period_score: 3,
				text: "원금이 보장 되지 않는다면 8% 이상은 꼭 벌어야 한다.",
			},
			{
				risk_score: 4,
				period_score: 4,
				text: "리스크를 감수하는 투자라면 10% 이상되는 투자만 한다.",
			},
		],
	},
	{
		id: 4,
		question: "누군가가 1000만원을 준다고 했다. 당신은 어떻게 받을 것인가?",
		answers: [
			{
				risk_score: 1,
				period_score: 1,
				text: "일시불로 1000만원 바로 받기",
			},
			{
				risk_score: 2,
				period_score: 2,
				text: "매월 105만원씩 10개월로 나눠서 받기",
			},
			{
				risk_score: 3,
				period_score: 3,
				text: "매년 120만원씩 10년 나눠서 받기",
			},
		],
	},
	{
		id: 5,
		question:
			"예상치 못한 투자 금액 1억원이 생겼다. 어떤 투자를 할 것인가?",
		answers: [
			{
				risk_score: 1,
				period_score: 1,
				text: "원금이 보장되는 만기 금리 2% 1년짜리 예금",
			},
			{ risk_score: 2, period_score: 2, text: "원금 +_10% 펀드" },
			{ risk_score: 3, period_score: 3, text: "원금 +- 20% 주식" },
			{ risk_score: 4, period_score: 4, text: "원금 +- 30% 선물" },
		],
	},
	{
		id: 6,
		question:
			"새로운 바이러스 COVID-20이 발병했다. 내 재산 5000만원을 어떻게 투자할 것인가?",
		answers: [
			{
				risk_score: 1,
				period_score: 1,
				text: "삼성전자에 5000만원을 주식에 몰빵한다.",
			},
			{
				risk_score: 2,
				period_score: 2,
				text: "코스피 ETF에 5000만원을 몰빵한다.",
			},
			{
				risk_score: 3,
				period_score: 3,
				text:
					"투자는 모르겠고, 원금을 지켜야겠다. 예금에 5000만원 예치한다.",
			},
		],
	},
	{
		id: 7,
		question:
			"내일 주식이 떨어질 확률이 60%라면 보유한 주식를 어떻게 할 것인가?",
		answers: [
			{
				risk_score: 1,
				period_score: 1,
				text: "아무 고민 없이 전량 팔기",
			},
			{
				risk_score: 2,
				period_score: 2,
				text: "일부만 팔고, 일부는 40% 상승에 베팅한다.",
			},
			{
				risk_score: 3,
				period_score: 3,
				text: "언젠가는 오르겠지하는 마음에 그대로 둔다.",
			},
		],
	},
	{
		id: 8,
		question: "원유 ETN, 곱버스, TQQQ, SQQQ에 대해서 들어봤다.",
		answers: [
			{
				risk_score: 1,
				period_score: 1,
				text: "잘 알고 있고, 투자도 해봤다.",
			},
			{
				risk_score: 2,
				period_score: 2,
				text: "들어는 봤지만, 자세히 알지 못한다.",
			},
			{ risk_score: 3, period_score: 3, text: "그게 뭐지 처음 듣는다." },
		],
	},
	{
		id: 9,
		question:
			"1000만원으로 주식 투자를 할 기회가 생겼다. 어떤 주식을 살 것인가?",
		answers: [
			{
				risk_score: 1,
				period_score: 1,
				text:
					"코로나로 앞으로 진단 키트가 수요가 높아질 테니, 위험성이 높더라도 지금 테마주를 사야겠어",
			},
			{
				risk_score: 2,
				period_score: 2,
				text:
					"안정적으로 돈을 벌고 있으나, 시장에서 저평가 받고 있는 은행주를 사야겠어",
			},
			{
				risk_score: 3,
				period_score: 3,
				text:
					"앞으로 점점 더 비대면 지속 될 수록 IT 시장에 대한 수요가 높아질테니 성장성이 높은 IT 주식을 사야겠어",
			},
		],
	},
];

export const PageReducer = (state, action) => {
	switch (action.type) {
		case "next":
			const new_page = state.page + 1;
			const quiz = QUIZ_LIST[new_page - 1];
			return {
				...state,
				page: new_page,
				risk_score: state.risk_score + action.payload.risk_score,
				period_score: state.risk_score + action.payload.period_score,
				question: quiz ? quiz["question"] : null,
				answers: quiz ? quiz["answers"] : null,
			};
		default:
			return;
	}
};
