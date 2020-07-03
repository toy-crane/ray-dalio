export const QUIZ_LIST = [
	{
		id: 1,
		question:
			"누군가가 1000만원을 준다고 합니다. 어떤 방식으로 받기를 원하시나요?",
		answers: [
			{
				text: "매년 120만원씩 10년 나눠서 받기",
				code: "a32",
				character_code: "a",
				risk_score: 3,
				period_score: 2,
			},
			{
				text: "매월 105만원씩 10개월로 나눠서 받기",
				code: "a23",
				character_code: "a",
				risk_score: 2,
				period_score: 3,
			},

			{
				text: "일시불로 1000만원 바로 받기",
				code: "a14",
				character_code: "a",
				risk_score: 1,
				period_score: 4,
			},
			{
				text: "50%의 확률로 2000만원 받기",
				code: "c41",
				character_code: "c",
				risk_score: 4,
				period_score: 1,
			},
		],
	},
	{
		id: 2,
		question: "현재 자산(부채 제외)의 규모는?",
		answers: [
			{
				text: "0~5000만원",
				code: "a00",
				character_code: "a",
				risk_score: 0,
				period_score: 0,
			},
			{
				text: "5000만원에서 1억",
				code: "a00",
				character_code: "a",
				risk_score: 0,
				period_score: 0,
			},
			{
				text: "1억 ~ 10억",
				code: "a00",
				character_code: "a",
				risk_score: 0,
				period_score: 0,
			},
			{
				text: "10억 이상",
				code: "g00",
				character_code: "g",
				risk_score: 0,
				period_score: 0,
			},
		],
	},
	{
		id: 3,
		question: "나의 자산에서 주식이 차지하는 비중은?",
		answers: [
			{
				text: "0 ~ 10%",
				code: "g10",
				character_code: "g",
				risk_score: 1,
				period_score: 0,
			},
			{
				text: "10~30%",
				code: "a20",
				character_code: "a",
				risk_score: 2,
				period_score: 0,
			},
			{
				text: "30~50%",
				code: "a30",
				character_code: "a",
				risk_score: 3,
				period_score: 0,
			},
			{
				text: "50 ~ 100%",
				code: "a40",
				character_code: "a",
				risk_score: 4,
				period_score: 0,
			},
		],
	},
	{
		id: 4,
		question: "나의 주식 매매 스타일은?",
		answers: [
			{
				text: "투자금이 생길 때만 투자하려고 했던 주식만 매입한다. ",
				code: "a14",
				character_code: "a",
				risk_score: 1,
				period_score: 4,
			},
			{
				text: "한달에 10번 이상 여러 종목을 샀다가 팔았다가 한다.",
				code: "a23",
				character_code: "a",
				risk_score: 2,
				period_score: 3,
			},
			{
				text: "일주일에 10번 이상 종목을 샀다가 팔았다가 한다.",
				code: "s32",
				character_code: "s",
				risk_score: 3,
				period_score: 1,
			},
			{
				text: "하루에 20번 이상 종목을 샀다가 팔았다가 한다.",
				code: "p41",
				character_code: "p",
				risk_score: 4,
				period_score: 1,
			},
		],
	},
	{
		id: 5,
		question:
			"보유하고 있는 주식이 내일 60% 확률로 떨어진다고 합니다. 어떻게 하실건가요?",
		answers: [
			{
				text: "일부만 팔고, 일부 그대로 두어 40% 상승에 베팅한다.",
				code: "a10",
				character_code: "a",
				risk_score: 1,
				period_score: 0,
			},
			{
				text: "장기적으로 오를 것이므로 그대로 둔다.",
				code: "a21",
				character_code: "a",
				risk_score: 2,
				period_score: 1,
			},
			{
				text: "기회라고 생각하고, 추가 매수한다.",
				code: "c31",
				character_code: "c",
				risk_score: 3,
				period_score: 1,
			},
			{
				text: "떨어질 확률이 크므로 전량 판다.",
				code: "b40",
				character_code: "b",
				risk_score: 4,
				period_score: 0,
			},
		],
	},
	{
		id: 6,
		question: "올해 현재까지 원금 대비 주식 투자 수익률은?",
		answers: [
			{
				text: "-15% 이상 손실",
				code: "d40",
				character_code: "d",
				risk_score: 4,
				period_score: 0,
			},
			{
				text: "-5 ~ -15% 손실",
				code: "a30",
				character_code: "a",
				risk_score: 3,
				period_score: 0,
			},
			{
				text: "원금에서 +- 5%",
				code: "s20",
				character_code: "s",
				risk_score: 2,
				period_score: 0,
			},
			{
				text: "5% ~ 20% 수익",
				code: "a30",
				character_code: "a",
				risk_score: 3,
				period_score: 0,
			},
			{
				text: "20% 이상 수익",
				code: "a40",
				character_code: "a",
				risk_score: 4,
				period_score: 0,
			},
		],
	},
	{
		id: 7,
		question: "투자할 주식을 선택하는 방식은?",
		answers: [
			{
				text: "안정적으로 돈을 벌고 있으며, 저평가된 주식을 매입한다.",
				code: "a20",
				character_code: "a",
				risk_score: 2,
				period_score: 0,
			},
			{
				text: "IT 수요가 높아질테니 성장성이 높은 IT 주식을 매입한다.",
				code: "a30",
				character_code: "a",
				risk_score: 3,
				period_score: 0,
			},
			{
				text: "주식 잘한다고 소문난 김 대리의 추천 종목을 매입한다.",
				code: "e40",
				character_code: "e",
				risk_score: 4,
				period_score: 0,
			},
			{
				text: "위험성이 높더라도 변동성이 큰 테마주를 매입한다. ",
				code: "a40",
				character_code: "a",
				risk_score: 4,
				period_score: 0,
			},
		],
	},
	{
		id: 8,
		question:
			"A 주식에 500만원을 투자했습니다. 주식을 어느 주기로 확인하시나요?",
		answers: [
			{
				text: "오늘 장이 어땠는지 출근, 퇴근 시간 정도에만 확인한다.",
				code: "a11",
				character_code: "a",
				risk_score: 1,
				period_score: 0,
			},
			{
				text: "먼 미래를 보고 투자했으니, 확인할 필요도 없다.",
				code: "a12",
				character_code: "a",
				risk_score: 1,
				period_score: 2,
			},
			{
				text: "매 시간마다 화장실에 가서 직원들 몰래 확인한다.",
				code: "a20",
				character_code: "a",
				risk_score: 2,
				period_score: 0,
			},
			{
				text: "스마트폰은 나와 한 몸이 되어 버렸다.",
				code: "j10",
				character_code: "j",
				risk_score: 3,
				period_score: 0,
			},
		],
	},
	{
		id: 9,
		question: "투자할 때, 바라는 연 수익률은?",
		answers: [
			{
				text:
					"원금이 절대적으로 보장되어야 하며, 2~3% 수익률 정도면 된다.",
				code: "k10",
				character_code: "k",
				risk_score: 1,
				period_score: 0,
			},
			{
				text: "원금이 보장 되지 않더라도 5~8%면 적절하다.",
				code: "a20",
				character_code: "a",
				risk_score: 2,
				period_score: 0,
			},
			{
				text: "원금이 보장 되지 않는다면 8%~10% 이상은 꼭 벌어야 한다.",
				code: "a30",
				character_code: "a",
				risk_score: 3,
				period_score: 0,
			},
			{
				text: "리스크를 감수하는 투자라면 10% 이상되는 투자만 한다.",
				code: "a40",
				character_code: "a",
				risk_score: 4,
				period_score: 0,
			},
		],
	},
	{
		id: 10,
		question:
			"회사 동료가 테마주에 투자하여 5천만원을 벌었다며, 종목을 추천해줬다. 어떻게 하실건가요?",
		answers: [
			{
				text: "무서워서 투자하지 못하고, 나중에 크게 후회한다.",
				code: "b00",
				character_code: "b",
				risk_score: 0,
				period_score: 0,
			},
			{
				text:
					"나만의 투자 철학이 있기 때문에 테마주는 관심을 두지 않는다.",
				code: "a10",
				character_code: "a",
				risk_score: 1,
				period_score: 0,
			},
			{
				text: "종목에 대해 자세하게 알아본다.",
				code: "a10",
				character_code: "a",
				risk_score: 2,
				period_score: 0,
			},
			{
				text: "배가 아파 조건 없이 다음날 바로 투자한다.",
				code: "t40",
				character_code: "t",
				risk_score: 3,
				period_score: 0,
			},
		],
	},
	{
		id: 11,
		question:
			"새로운 바이러스가 발병해 연초 대비 지수가 50% 폭락했습니다. 5000만원을 어떻게 투자 하실건가요?",
		answers: [
			{
				text: "지금의 상황이 무서워 현금을 보유하고 관망한다. ",
				code: "b10",
				character_code: "b",
				risk_score: 1,
				period_score: 0,
			},
			{
				text: "더 떨어 질수도 있으니 500만원씩 나누어 분할 매수한다.",
				code: "a20",
				character_code: "a",
				risk_score: 2,
				period_score: 0,
			},
			{
				text:
					"과거의 데이터로 봤을 때 지금이 가장 저점이다. 우량주에 모두 투자한다.",
				code: "a30",
				character_code: "a",
				risk_score: 3,
				period_score: 0,
			},
			{
				text:
					"신이 주신 기회다. 전부 투자하고, 그 투자금을 담보로 또 투자한다.",
				code: "c40",
				character_code: "c",
				risk_score: 4,
				period_score: 0,
			},
		],
	},
];
