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
	moneyAttribute: {
		korName: "돈의 속성",
		description: "돈의 속성, 스노우폭스북스",
		url: "https://coupa.ng/bFgq3O",
		imageUrl:
			"https://static.coupangcdn.com/image/affiliate/banner/38d32941581ec8fb33f6e8d88d7f267f@2x.jpg",
	},
	principal: {
		korName: "원칙",
		description: "원칙, 한빛비즈",
		url: "https://coupa.ng/bFgs7z",
		imageUrl:
			"https://static.coupangcdn.com/image/affiliate/banner/7b440748c27508500cc1a4f0af47c46f@2x.jpg",
	},
	ambition: {
		korName: "손정의 300년 왕국의 야망",
		description:
			"손정의 300년 왕국의 야망:300년 왕국을 향한 손정의의 야망과 도전, 서울문화사",
		url: "https://coupa.ng/bFgxfs",
		imageUrl:
			"https://static.coupangcdn.com/image/affiliate/banner/51cb622d5b22a3f25a88c7ae2cb4fb12@2x.jpg",
	},
};

export const REPORTS = {
	goldspoon: {
		text:
			"빚 없이 자산을 10억 이상 가진 당신 너무 부러워요. 처음부터 돈이 많으셨다고 하셔도 부럽고, 일을 통해서 돈을 버셨다고 해도 부럽습니다. 충분히 잘 해오고 계시지만, 자산 대비 주식 비중이 너무 적은 것은 조금 걱정이에요. 미국의 경제 수장 제롬 파월이 최근 자신의 자산 비중을 공개했는데, 무려 재산의 60% 이상을 주식에 투자하고 있다고 해요. 나머지 40%는 채권과 부동산으로 구성되어 있습니다. 이제는 제롬 파월처럼 여러 자산에 분산 투자하여 가진 자산을 지켜보시는게 어떨까요?",
		hash_tags: "#시작부터달라 #재테크가 뭐야?",
		r_score: 5,
		p_score: 50,
		i_score: 10,
		b_score: 10,
		good_pick: "etf",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["passingLane"],
			gBook: RecommendationBooks["ETF"],
		},
		image_url: "/characters/g.png",
		og_image_url: "https://www.usaant.kr/opengraph/g.png",
		og_title: "저는 금수저에요!",
	},
	irondragon: {
		text:
			"투자한 종목에 대한 감이 확실하고, 믿음과 실행력이 엄청 나신 분이네요. 멋지십니다. 레버리지로 투자도 하시고, 굳은 신념이 있으신 것 같아요. 하지만 매번 수익을 낼 수 있으면 좋겠지만, 주식 시장에는 우리가 예측할 수 없는 문제들로 등락을 반복하는 만큼 높은 수익보다 이제는 안정적으로 운용하는 것도 좋은 접근일 것 같아요. '첫째도 둘째도 절대로 잃지 않는다'는 워렌 버핏의 원칙처럼 잃지 않는 투자자가 되시길 응원하겠습니다.",
		hash_tags: "#한 종목에 전 재산을 태워? #바이오은 무너졌냐?",
		r_score: 90,
		p_score: 15,
		i_score: 75,
		b_score: 80,
		good_pick: "theme",
		bad_pick: "etf",
		books: {
			nBook: RecommendationBooks["passingLane"],
			gBook: RecommendationBooks["ETF"],
		},
		image_url: "/characters/c.png",
		og_image_url: "https://www.usaant.kr/opengraph/c.png",
		og_title: "저는 곽철용과 비슷한 투자자입니다.",
	},
	bigear: {
		text:
			"주변에서 주식으로 돈을 벌었다고 하면 동공에 엄청난 지진이 일어나는 스타일이시네요.  부동산 투자로  3억 벌었다는 김 부장님, 비트코인으로 5천만원 벌었다는 이 과장님, 우선주 테마로 하루에 500만원 벌었다는 친구까지... 그런데 거기서만 그치지 않고, 코끼리님은 불나방처럼 '나도 한 번 해볼까'하는 마음으로 고민 없이 이 종목, 저 종목을 하나씩 매입하지만, 결국엔 손해를 보는 유형이신 것 같아요. 이럴 때 일수록 코끼리님이 자신 있는 분야에서 최고를 달리고 있는 회사에 장기 투자를 해보시는 건 어떨까요?  ",
		hash_tags: "#김대리가 얼마 벌었다고? #내 수익률은 왜이럴깡",
		r_score: 80,
		p_score: 15,
		i_score: 50,
		b_score: 70,
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
			"하루에 매매를 정말 많이 하시는 스타일이시네요. 전국의 도박판을 찾아 해매는 타짜들처럼 돈이 되는 종목을 찾아 이 곳 저 곳을 배회하는 성향을 가지신 것 같아요. 게다가 타짜들 처럼 거래 한 번, 한 번에 버는 수익에 큰 희열을 느끼시는 것 같아요.  타짜에는 전설의 도박꾼 평경장이 있듯이, 주식판의 전설의 투자자 평경장이 될 수 있도록 응원할께요! ",
		hash_tags:
			"#혼이 담긴 클릭 #이 바닥엔 영원한 수익도 손실도 없어 #돈을 벌고 싶니?",
		r_score: 85,
		p_score: 10,
		i_score: 73,
		b_score: 90,
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
			"매 번 투자에 앞서 고민이 많으신 타입이시네요. 마음 속에 찜 해놓고, 투자를 망설였던 종목들이 하루가 다르게 오를 때 마음이 많이 아프시진 않으셨나요? 게다가 막상 투자하려고 할 때, 내 마음도 몰라주고 또 올라서 투자를 못한 경우가 많으실 것 같아요. 이제는 좀 더 과감하게 장기적으로 투자를 해보는 것을 추천드려요. 이미 충분히 올랐더라도 미래가 확실하다면 과거에 대한 미련 없이 시작해보는 것은 어떨까요?",
		hash_tags: "#널 너무 모르고 #앞으로의 행복만 생각해",
		r_score: 70,
		p_score: 20,
		i_score: 35,
		b_score: 30,
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
			"아이고.. 주변의 돈을 벌었다는 이야기에 많은 고민 없이 투자하시는 유형인 것 같아요. '주식 잘하는 친구가 추천해준거니까 괜찮겠지', '저 사람이면 믿을만 해', '설마 떨어지겠어?' 이런 생각을 하시진 않으셨나요? 그리고 나서 '그럼 나도 한 번?' 하는 마음에 뛰어 들지만 생각보다 호락호락하지 않은 시장에 좌절을 많이 하셨을 것 같아요.  이럴 때 일수록 공장장님이 자신 있는 분야에서 최고를 달리고 있는 회사에 장기 투자를 해보시는 건 어떨까요? 성투 하실 수 있을꺼에요 응원할께요!!",
		hash_tags: "#이제 그만 #다짐해요 우량주에 투자하기로",
		r_score: 95,
		p_score: 30,
		i_score: 25,
		b_score: 70,
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
			"레이 달리오는 20세기에는 워렌버핏이라면 21세기는 레이달리오라 해도 과언이 아닐 정도로 금융계를 선도하는 인물이에요.  금, 채권, 주식, 원자재 등에 분산하여 투자하는 월웨더 자산 배분 전략으로 유명한 투자자에요. 수익률이 크진 않지만 꾸준히 자산을 분산하고, 투자를 이끌어오고 있는 당신. 레이달리오에 걸맞는 실력을 갖추신 것 같습니다. 앞으로는 주식 뿐만 아니라 채권, 금, 현금, 원자재 등 다양한 자산으로 포르폴리오를 구성해보시는 것을 추천드려요.",
		hash_tags: "#깨지지 않는 계란 #안정적 수익",
		r_score: 50,
		p_score: 75,
		i_score: 85,
		b_score: 70,
		good_pick: "etf",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["principal"],
			gBook: RecommendationBooks["moneyAttribute"],
		},
		image_url: "/characters/y.png",
		og_image_url: "https://www.usaant.kr/opengraph/y.png",
		og_title: "저는 분산 투자의 대가 레이 달리오와 비슷해요!",
	},
	gub: {
		text:
			"투자를 하고, 돈을 잃을까하는 걱정에 스마트폰을 놓지 못하는 스타일이시네요. 상한가에도, 하한가에도 심장이 쿵쾅쿵쾅하시나요? 게다가 투자 걱정에 일도 잘 안되고, 주변에도 소홀해 지고 있진 않으셨나요?  '주식의 변동성은 좋은 친구'라고 워렌 버핏이 이야기했듯이 잘 사용하면 금이지만, 잘못하면 독이 되는게 변동성인 것 같아요. 본인만의 매수, 매도 원칙을 세우고, 조금은 담대하게 주식을 바라보는 건 어떨까요?",
		hash_tags: "#담대하게 #장기 투자하기",
		r_score: 70,
		p_score: 50,
		i_score: 40,
		b_score: 45,
		good_pick: "ETF",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["moneyAttribute"],
			gBook: RecommendationBooks["passingLane"],
		},
		image_url: "/characters/j.png",
		og_image_url: "https://www.usaant.kr/opengraph/j.png",
		og_title: "저는 겁쟁이랍니다",
	},
	alwaysjejari: {
		text:
			"매매를 많이 하는데, 생각보다 수익이 나지 않아 걱정이 많은 스타일이시네요. '이 정보라면 내일 무조건 상한가 간다. 가즈아!!!'를 외치며, 매매를 하지만 매번 시장은 호락호락하지 않죠. 매번 내가 아는 정보와 반대로 움직이거나, 살 때마다 하한가이지 않던가요? '한 두번은 시장의 흐름을 맞출 순 있지만, 흐름을 영원히 맞추는 것은 불가능하다'는 존리 대표님의 말씀처럼 이제 좀 더 장기적으로 종목을 보고, 투자 해보시는 건 어떨까요?",
		hash_tags: "#수익보다 거래세가 더 많아... #앞으론 장기투자",
		r_score: 75,
		p_score: 30,
		i_score: 30,
		b_score: 90,
		good_pick: "bluechip",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["johnLee"],
			gBook: RecommendationBooks["passingLane"],
		},
		image_url: "/characters/s.png",
		og_image_url: "https://www.usaant.kr/opengraph/s.png",
		og_title: "저는 매번 제자리라 슬픈 투자자에요",
	},
	warren: {
		text:
			"투자의 대가 워런 버핏과 비슷한 성향이시다니, 대단하세요. 지금도 충분히 잘 하고 계십니다. 앞으로도 꾸준히 수입이 생길 때마다 투자를 이어간다면 곧 경제적 자유를 얻으실 수 있을 것 같아요.  더불어 투자를 계속 하시면서 자신만의 투자 원칙을 만들어 가신다면 더욱 멋진 투자자가 되지 않을까 싶습니다. 워렌 버핏님의 장밋빛 미래 응원하겠습니다!!",
		hash_tags: "#가치투자의 대명사 #종목에 대한 강한 믿음",
		r_score: 30,
		p_score: 90,
		i_score: 80,
		b_score: 70,
		good_pick: "bluechip",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["passingLane"],
		},
		image_url: "/characters/w.png",
		og_image_url: "https://www.usaant.kr/opengraph/w.png",
		og_title: "저는 장기 투자의 대가 워렌 버핏같은 투자자에요",
	},
	savingking: {
		text:
			"주식에 대한 두려움이 많으신 타입이신 것 같아요. 주변에 수익은 커녕 원금도 못 챙긴 분들이 많고, 막상 시도 해봤더니 손해만 보고 힘드셨죠? 그런데 어떻하죠? 예금만으로는 부자가 되기 너무 힘든 세상이 왔어요. 물가와 집 값은 하루가 다르게 빠르게 오르지만, 내 연봉과 내가 모아놓은 돈은 제자리에 있어요. 아쉽지만 앞으로도 그럴 것 같아요. 이럴 때 일수록 조금 용기를 내어 작은 금액으로 안정적인 종목(ETF, 우량주)부터 시작해보시는 건 어떨까요? 저축왕님의 부자가 되는길 앞으로 응원하겠습니다.",
		hash_tags: "#주식은 무서워 #손해 안보는게 어디?",
		r_score: 5,
		p_score: 90,
		i_score: 10,
		b_score: 5,
		good_pick: "etf",
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
			"드디어 만났네요. 가장 극단적인 투자자, 파괴왕님. 거대했던 코로나 하락장이 끝나고, 새로운 파도가 오고 있는데 수익률이 좋지 않네요. 주변 지인의 이야기에, 언론에서 하는 이야기에, 오르는 차트만 보고, 위험한 종목들에 투자를 하시진 않으셨나요? 이제는 배울만큼 배웠으니, 졸업을 하셔야 할 때입니다. 당분간은 일확천금은 못 보더라도 안정적인 종목(ETF, 우량주)들을 통해서 장기간 기다리면서 자산을 늘리는 방법을 알아보는게 어떨까요? '첫째도 둘째도 절대로 잃지 않는다'는 워렌 버핏의 원칙처럼 가진 것을 지키는 연습부터 시작하시면 좋은 투자자가 되실 수 있을꺼에요!",
		hash_tags: "#모든 것을 파괴한다 #상장폐지 #거래정지",
		r_score: 95,
		p_score: 15,
		i_score: 10,
		b_score: 80,
		good_pick: "etf",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["nextWealth"],
			gBook: RecommendationBooks["johnLee"],
		},
		image_url: "/characters/d.png",
		og_image_url: "https://www.usaant.kr/opengraph/d.png",
		og_title: "저는 모든걸 파괴하는 파괴왕이에요",
	},
	jessi: {
		text:
			"제시 리버모어는 가격이 오르면 사고, 내리면 공매도를 하는 이른바 추세매매의 창시자에요. 데이 트레이딩에 역사에 큰 획을 그은 인물로 많이 회자되고 있어요. 하지만 그도 데이 트레이딩의 위험성을 알았기에 모든 수익을 재투자 하지 않고 일부 수익을 계속해서 인출하며 수익을 실현했다고 해요. 또한 자산 신탁 회사에 일부를 맡김으로써 일정 부분은 항상 현금으로 유지했다는 이야기가 있어요. 데이 트레이딩을 사랑하는 당신. 이제는 제시 리버모어처럼 조금씩 자산을 배분 해보는 것은 어떨까요?",
		hash_tags: "#단타의 전설 #클릭은 눈보다 빠르다",
		r_score: 80,
		p_score: 10,
		i_score: 70,
		b_score: 90,
		good_pick: "theme",
		bad_pick: "etf",
		books: {
			nBook: RecommendationBooks["dayTrader"],
			gBook: RecommendationBooks["themeStock"],
		},
		image_url: "/characters/r.png",
		og_image_url: "https://www.usaant.kr/opengraph/r.png",
		og_title: "저는 단타의 전설, 제시 리버모어 같은 투자자에요",
	},
	vision: {
		text:
			"손정의는 일본에서 활동 중인 한국계 일본 기업인이에요. 대표적인 일본 통신사인 소프트 뱅크를 이끌고 있으며, 세계 최대 벤처 투자펀드인 비전 펀드도 이끌고 있어요. 손정의는 2016년 7월에 은퇴하려 했으나, 인공지능이 인류를 새롭게 바꿀 것에 매료되어 은퇴 계획을 번복하기도 했어요. 그 만큼 AI가 가져올 미래에 대해 큰 믿음을 갖고 있는 투자자입니다. 위험 하더라도, 장기적으로 투자하는 당신. 멋진 미래에 걸맞는 멋진 수익도 기대할께요!",
		hash_tags: "#뜨거운 미래 #AI가 만드는 장미빛 미래",
		r_score: 70,
		p_score: 90,
		i_score: 95,
		b_score: 70,
		good_pick: "it",
		bad_pick: "theme",
		books: {
			nBook: RecommendationBooks["ambition"],
			gBook: RecommendationBooks["passingLane"],
		},
		image_url: "/characters/m.png",
		og_image_url: "https://www.usaant.kr/opengraph/m.png",
		og_title: "저는 손정의와 비슷한 투자자에요",
	},
};
