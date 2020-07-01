/*
G -> 금수저
D -> 파괴왕
E -> 팔랑귀
S -> 쌩쌩이
P -> 평경장
T -> 휴지 공장장
J -> 민경훈
B -> 버스
K -> 저축왕
C -> 곽철용
M -> 손정의
R -> 제시 리버모어

글로벌 ETF 투자 실전 가이드북: https://coupa.ng/bEU2oe,
부의 추월차선: https://coupa.ng/bEU2xd,
내일의 부: https://coupa.ng/bEVbNV
존리의 부자 습관 되기: https://coupa.ng/bEVcfw
주식 살 때와 팔 때 단타매매로 하루 80만원 번다: https://coupa.ng/bEVeFo
미국 배당주 투자: https://coupa.ng/bEVgs1
한권으로 끝내는 테마주 투자: https://coupa.ng/bEVidV
*/

const RecommendationBooks = {
	ETF: {
		korName: "글로벌 ETF 투자 실전 가이드북!",
		description:
			"뷔페처럼 골라서 투자하는 해외 ETF 백과사전:이 책 한 권이면 끝 '글로벌 ETF 투자 실전 가이드북!', 스마트비즈니스",
		url: "https://coupa.ng/bFdFX9",
		imageUrl:
			"https://static.coupangcdn.com/image/affiliate/banner/1952b10e25a4d01b7edba23ddaa039d4@2x.jpg",
	},
	passingLane: {
		korName: "부의 추월차선",
		description:
			"부의 추월차선:부자들이 말해 주지 않는 진정한 부를 얻는 방법",
		url: "https://coupa.ng/bFdGBi",
		imageUrl:
			"https://static.coupangcdn.com/image/affiliate/banner/11c5d74ba78b9cc869472b737d0d7cd3@2x.jpg",
	},
	nextWealth: {
		korName: "내일의 부 1 + 2권 세트",
		description: "내일의 부 1 + 2권 세트, 트러스트북스",
		url: "https://coupa.ng/bFdHai",
		imageUrl:
			"https://static.coupangcdn.com/image/affiliate/banner/b8e97e3a3008839c0a8a5c2a6714cda4@2x.jpg",
	},
	johnLee: {
		korName: "존리의 부자되기 습관",
		description:
			"존리의 부자되기 습관:대한민국 경제독립 액션 플랜, 지식노마드",
		url: "https://coupa.ng/bFdHou",
		imageUrl:
			"https://static.coupangcdn.com/image/affiliate/banner/5f9b3ffa2ab7ac274ec4df6c15b41246@2x.jpg",
	},
	dayTrader: {
		korName: "주식 살 때와 팔 때 단타매매로 하루 80만원 번다",
		description:
			"주식 살 때와 팔 때 단타매매로 하루 80만원 번다, 한국경제신문사",
		url: "https://coupa.ng/bFdHDX",
		imageUrl:
			"https://static.coupangcdn.com/image/affiliate/banner/17f8b2216cb3aa4f0ac622d4b6a2522f@2x.jpg",
	},
	usaDividend: {
		korName: "미국 배당주 투자",
		description:
			"잠든 사이 월급 버는 미국 배당주 투자:안정된 수익 내는 배당투자의 나침반, 베가북스",
		url: "https://coupa.ng/bFdHYj",
		imageUrl:
			"https://static.coupangcdn.com/image/affiliate/banner/886d39c11b30b3b8f8f9caffc2346e98@2x.jpg",
	},
	themeStock: {
		korName: "한 권으로 끝내는 테마주 투자",
		description:
			"한 권으로 끝내는 테마주 투자:무관심에 사서 뜨거운 관심에 팔아라!, 길벗",
		url: "https://coupa.ng/bFdIl2",
		imageUrl:
			"https://static.coupangcdn.com/image/affiliate/banner/b99fabc1dda6b1d4502b5a1063decae7@2x.jpg",
	},
};

export const REPORTS = {
	goldspoon: {
		text: "나는 금수저입니다. 돈이 참 많죠",
		hash_tags: "#시작부터달라 #재테크???",
		r_score: 5,
		p_score: 80,
		good_pick: "etf",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["passingLane"],
			gBook: RecommendationBooks["ETF"],
		},
		image_url: "characters/g.png",
		og_image_url: "https://www.usaant.kr/opengraph/g.png",
		og_title: "저는 금수저에요!",
	},
	irondragon: {
		text:
			"나는 타짜에 출현한 철용 곽입니다. 위험한 자산에 너무 많은 투자를 하시는게 아닌가요? 조심하세요.",
		hash_tags: "#한 종목에 전 재산을 태워? #신라젠은 무너졌냐?",
		r_score: 90,
		p_score: 15,
		good_pick: "theme",
		bad_pick: "etf",
		books: {
			nBook: RecommendationBooks["passingLane"],
			gBook: RecommendationBooks["ETF"],
		},
		image_url: "/characters/c.png",
		og_image_url: "https://www.usaant.kr/opengraph/c.png",
		og_title: "저는 곽철용이랑 비슷한 투자자입니다.",
	},
	bigear: {
		text:
			"귀가 커서 주변의 소리가 너무 잘 들립니다. 부동산으로 10억을 벌었다는 김 부장님, 비트코인으로 5천만원 벌었다는 이 과장님, 삼성중공업(우)로 하루만에 3천만원 벌었다는 박 대리. 하지만 제가 살 때마다 가격은 천정부지로 빠져서 너무 슬픕니다.",
		hash_tags: "#김대리가 얼마 벌었다고? #내 수익률은 왜이럴깡",
		r_score: 80,
		p_score: 15,
		good_pick: "it",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["johnLee"],
		},
		image_url: "/characters/e.png",
		og_image_url: "https://www.usaant.kr/opengraph/e.png",
		og_title: "저는 귀가 너무 커서 슬픈 투자자에요!",
	},
	pyeonggyeongjang: {
		text:
			"고니: 다리가 무너졌어요? 진짜 세상이 어떻게 돌아가는지 모르겠어요. 평경장: 너는 세상이 아름답고 평등하다고 생각하니? 고니: 당연히 그래야 되는 거 아니에요? 평경장: 썅간나새끼, 세상이 아름답고 평등하면 우린 뭘 먹고 사니? 연습이나 하라!",
		hash_tags: "#혼이 담긴 클릭 #이 바닥엔 영원한 수익도 손실도 없어",
		r_score: 85,
		p_score: 10,
		good_pick: "bio",
		bad_pick: "etf",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["dayTrader"],
		},
		image_url: "/characters/p.png",
		og_image_url: "https://www.usaant.kr/opengraph/p.png",
		og_title: "저는 평경장입니다!",
	},
	departingbus: {
		text:
			"이제는 알아 말 안 해도 왜 이리도 쉬운 걸 몰랐을까 이 옷들을 고를 시간에 30분 더 널 안아줄걸",
		hash_tags: "#널 너무 모르고 #앞으로의 행복만 생각해",
		r_score: 30,
		p_score: 20,
		good_pick: "dividend",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["passingLane"],
			gBook: RecommendationBooks["usaDividend"],
		},
		image_url: "/characters/b.png",
		og_image_url: "https://www.usaant.kr/opengraph/b.png",
		og_title: "저는 미련이 많은 투자자에요!",
	},
	paperfactory: {
		text:
			"왤케 매번 위험한 거만 하는거에요? 매번 깡통만 찰꺼에요? 깡통 또 깡통. 지겹지도 않나요?",
		hash_tags: "#이제 그만 #다짐해요 우량주에 투자하기로",
		r_score: 95,
		p_score: 30,
		good_pick: "bluechip",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["passingLane"],
		},
		n_book_url: "https://coupa.ng/bEVbNV",
		g_book_url: "https://coupa.ng/bEU2xd",
		image_url: "/characters/t.png",
		og_image_url: "https://www.usaant.kr/opengraph/t.png",
		og_title: "저는 휴지 공장 공장장이에요!",
	},
	raydalio: {
		text:
			"왤케 매번 위험한 거만 하는거에요? 매번 깡통만 찰꺼에요? 깡통 또 깡통. 지겹지도 않나요?",
		hash_tags: "#이제 그만 #다짐해요 우량주에 투자하기로",
		r_score: 95,
		p_score: 30,
		good_pick: "bluechip",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["passingLane"],
		},
		image_url: "/characters/y.png",
		og_image_url: "https://www.usaant.kr/opengraph/y.png",
		og_title: "저는 레이 달리오와 비슷해요!",
	},
	gub: {
		text:
			"왤케 매번 위험한 거만 하는거에요? 매번 깡통만 찰꺼에요? 깡통 또 깡통. 지겹지도 않나요?",
		hash_tags: "#이제 그만 #다짐해요 우량주에 투자하기로",
		r_score: 95,
		p_score: 30,
		good_pick: "bluechip",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["passingLane"],
		},
		image_url: "/characters/j.png",
		og_image_url: "https://www.usaant.kr/opengraph/j.png",
		og_title: "저는 겁쟁이랍니다",
	},
	alwaysjejari: {
		text:
			"왤케 매번 위험한 거만 하는거에요? 매번 깡통만 찰꺼에요? 깡통 또 깡통. 지겹지도 않나요?",
		hash_tags: "#이제 그만 #다짐해요 우량주에 투자하기로",
		r_score: 95,
		p_score: 30,
		good_pick: "bluechip",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["passingLane"],
		},
		image_url: "/characters/s.png",
		og_image_url: "https://www.usaant.kr/opengraph/s.png",
		og_title: "저는 매번 제자리라 슬픈 투자자에요",
	},
	warren: {
		text:
			"왤케 매번 위험한 거만 하는거에요? 매번 깡통만 찰꺼에요? 깡통 또 깡통. 지겹지도 않나요?",
		hash_tags: "#이제 그만 #다짐해요 우량주에 투자하기로",
		r_score: 95,
		p_score: 30,
		good_pick: "bluechip",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["passingLane"],
		},
		image_url: "/characters/w.png",
		og_image_url: "https://www.usaant.kr/opengraph/w.png",
		og_title: "저는 워렌 버핏같은 투자자에요",
	},
	savingking: {
		text:
			"왤케 매번 위험한 거만 하는거에요? 매번 깡통만 찰꺼에요? 깡통 또 깡통. 지겹지도 않나요?",
		hash_tags: "#이제 그만 #다짐해요 우량주에 투자하기로",
		r_score: 10,
		p_score: 90,
		good_pick: "dividend",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["passingLane"],
		},
		image_url: "/characters/k.png",
		og_image_url: "https://www.usaant.kr/opengraph/k.png",
		og_title: "저는 주식보다 예금이나 할께요",
	},
	destroyer: {
		text:
			"왤케 매번 위험한 거만 하는거에요? 매번 깡통만 찰꺼에요? 깡통 또 깡통. 지겹지도 않나요?",
		hash_tags: "#이제 그만 #다짐해요 우량주에 투자하기로",
		r_score: 10,
		p_score: 90,
		good_pick: "dividend",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["passingLane"],
		},
		image_url: "/characters/d.png",
		og_image_url: "https://www.usaant.kr/opengraph/d.png",
		og_title: "저는 모든걸 파괴하는 파괴왕이에요",
	},
	jessi: {
		text:
			"왤케 매번 위험한 거만 하는거에요? 매번 깡통만 찰꺼에요? 깡통 또 깡통. 지겹지도 않나요?",
		hash_tags: "#이제 그만 #다짐해요 우량주에 투자하기로",
		r_score: 10,
		p_score: 90,
		good_pick: "dividend",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["passingLane"],
		},
		image_url: "/characters/r.png",
		og_image_url: "https://www.usaant.kr/opengraph/r.png",
		og_title: "저는 단타의 전설, 제시 리버모어 같은 투자자에요",
	},
	vision: {
		text:
			"왤케 매번 위험한 거만 하는거에요? 매번 깡통만 찰꺼에요? 깡통 또 깡통. 지겹지도 않나요?",
		hash_tags: "#이제 그만 #다짐해요 우량주에 투자하기로",
		r_score: 10,
		p_score: 90,
		good_pick: "dividend",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["passingLane"],
		},
		image_url: "/characters/m.png",
		og_image_url: "https://www.usaant.kr/opengraph/m.png",
		og_title: "저는 손정의와 비슷한 투자자에요",
	},
};
