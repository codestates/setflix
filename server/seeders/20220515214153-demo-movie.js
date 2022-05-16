"use strict";
require("dotenv").config();

const baseUrl = "https://api.themoviedb.org/3/";
const imageUrl = "hppt://image.tmdb.org/t/p/사이즈";
const apiKey = process.env.API;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "movies",
      [
        {
          title: "수퍼 소닉 2",
          photo: "/8dzKn3RtPWUJRG9ymSpi423eMNV.jpg",
          releasedAt: "2022-03-30",
          actor: null,
          director: null,
          genre: null,
          description: "강력한 파워의 ‘너클즈’와 함께 돌아온 천재 과학자 ‘닥터 로보트닉’에 맞서 지구를 구하기 위해 ‘소닉’과 새로운 파트너 ‘테일즈’가 전 세계를 누비는 스피드 액션 블록버스터.",
        },
        {
          title: "언차티드",
          photo: "/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
          releasedAt: "2022-02-10",
          actor: null,
          director: null,
          genre: null,
          description: "평범한 삶을 살던 네이선은 인생을 바꿀 뜻밖의 제안을 받는다. 그의 미션은 크루와 함께 사라진 형과 500년 전 잃어버린 천문학적인 가치를 지닌 트레져를 찾아내는 것. 그러나 몬카다의 위협 속, 누구보다 빠르게 미지의 세계에 닿기 위해 결단을 내려야만 하는데…",
        },
        {
          title: "배드 가이즈",
          photo: "/x6KSvale7iuxLhsrEfhYNoICyfK.jpg",
          releasedAt: "2022-03-17",
          actor: null,
          director: null,
          genre: null,
          description:
            "작전 설계부터 금고 해제, 해킹, 액션, 위장까지 완벽한 팀플레이를 펼치는 자타공인 최고의 나쁜 녀석들이 한순간의 실수로 체포된다.  하지만 그들도 착해질 수 있다는 ‘마멀레이드 박사’의 주장으로 나쁜 녀석들은 바른 생활 갓생 프로젝트에 투입되고, 이들은 다시 한번 자유의 몸을 위해 태어나 처음으로 바른 생활에 도전하게 되는데…  나쁜 녀석들의 사상 초유 바른 생활 갓생 프로젝트가 시작된다!",
        },
        {
          title: "더 배트맨",
          photo: "/bCz71ysciwNL2xddSm25ufrgZ7V.jpg",
          releasedAt: "2022-03-01",
          actor: null,
          director: null,
          genre: null,
          description:
            "지난 2년 간 고담시의 어둠 속에서 범법자들을 응징하며 배트맨으로 살아온 브루스 웨인. 알프레드와 제임스 고든 경위의 도움 아래 그는 도시의 부패한 공직자들과 고위 관료들 사이에서 복수의 화신으로 활약한다. 고담의 시장 선거를 앞두고 고담의 엘리트 집단을 목표로 잔악한 연쇄살인을 저지르는 수수께끼 킬러 리들러가 나타나자, 최고의 탐정 브루스 웨인이 수사에 나서고 남겨진 단서를 풀어가며 캣우먼, 펭귄, 카마인 팔코네, 리들러를 차례대로 만난다. 사이코 범인의 미스터리를 수사하면서 그 모든 증거가 자신을 향한 의도적인 메시지였음을 깨닫고,  리들러에게 농락 당한 배트맨은 광기에 사로잡힌다. 범인의 무자비한 계획을 막고 오랫동안 고담시를 썩게 만든 권력 부패의 고리를 끊어야 하지만, 부모님의 죽음에 얽힌 진실이 밝혀지자 복수와 정의 사이에서 갈등하는데...",
        },
        {
          title: "닥터 스트레인지: 대혼돈의 멀티버스",
          photo: "/vL5ktZauR0fZMDOHKjakb1idhuU.jpg",
          releasedAt: "2022-05-04",
          actor: null,
          director: null,
          genre: null,
          description: "끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며 오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 닥터 스트레인지. 대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데….",
        },
        {
          title: "스파이더맨: 노 웨이 홈",
          photo: "/voddFVdjUoAtfoZZp2RUmuZILDI.jpg",
          releasedAt: "2021-12-15",
          actor: null,
          director: null,
          genre: null,
          description:
            "‘미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는 하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해 ‘닥터 스트레인지’를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가 열리면서 각기 다른 차원의 불청객들이 나타난다. ‘닥터 옥토퍼스’를 비롯해 스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에 ‘피터 파커’는 사상 최악의 위기를 맞게 되는데…",
        },
        {
          title: "더 컨트랙터",
          photo: "/fZid9LbFTZV7NjM0qMwL1mPjhqu.jpg",
          releasedAt: "2022-03-10",
          actor: null,
          director: null,
          genre: null,
          description:
            "특수부대 중사 출신 ‘제임스 하퍼’는 전역을 명 받고 법의 테두리 밖에서 국가에 충성하는 극비 조직에 합류한다. 그에게 주어진 첫번째 미션은, 전세계를 혼란에 빠뜨릴 바이러스 테러를 막는 것. 그러나, 미션 수행 도중 거대한 음모에 휘말리게 되고 충격과 위기를 겪게 되는데… 더 이상 물러설 곳은 없다.  모든 것을 건, 새로운 미션이 시작된다!",
        },
        {
          title: "메이의 새빨간 비밀",
          photo: "/hsOhOcX7qDy7bPwbrt1OoITngrf.jpg",
          releasedAt: "2022-03-10",
          actor: null,
          director: null,
          genre: null,
          description:
            "엄마의 착한 딸, 아니면 미운 13살? 성적도 우수하고 친구들과 사이도 좋은 데다 부모와도 친밀한 관계를 유지하고 있는, 똑 부러지면서도 엉뚱한 매력의 소유자 메이는 요즘 질풍노도의 시기를 겪느라 고민이 많다. 이 나이에 엄마의 과잉보호를 받자니 스트레스가 이만저만이 아닌 데다, 관심사, 인간관계, 신체 등 그녀의 모든 것이 변하고 있기 때문. 그런데 이 와중에 흥분하면 거대한 레서판다로 변신하는 비밀까지 떠안게 되다니! 아침도 먹어야 하고 학교도 가야 하는데, 이 엄청난 비밀을 어떻게 숨겨야 할까?",
        },
        {
          title: "La Octava Cláusula",
          photo: "/8tc8eMFAX2SDC1TRu987qFQy8Cl.jpg",
          releasedAt: "2022-04-29",
          actor: null,
          director: null,
          genre: null,
          description: "",
        },
        {
          title: "문폴",
          photo: "/2xmJCxrt5t2dFhvwvmxZ5Cy577j.jpg",
          releasedAt: "2022-02-03",
          actor: null,
          director: null,
          genre: null,
          description:
            "궤도를 이탈한 달이 지구를 향해 떨어지기 시작하면서 지구의 중력과 모든 물리적인 법칙이 붕괴된다. 거대한 해일과 지진, 화산폭발, 쓰나미와 이상기후까지 상상조차 불가능했던 모든 재난으로 전 세계는 공포와 혼란에 빠진다. 달과 충돌까지 남은 시간은 단 30일. NASA 연구원 파울러, 전직 우주 비행사 브라이언, 그리고 우주 덕후 KC는 달을 막을 방법을 찾기 위해 마지막 우주선에 오른다.",
        },
        {
          title: "닥터 스트레인지",
          photo: "/xA7ic72L0mejJX1SYMU38F7wwiF.jpg",
          releasedAt: "2016-10-25",
          actor: null,
          director: null,
          genre: null,
          description:
            "오만함과 실력 모두 최고인 신경외과 의사 닥터 스티븐 스트레인지는 운전 중에 핸드폰을 한 대가로 두 손의 신경이 끊어지는 심각한 부상을 입고 큰 상심에 빠진다. 게다가 모난 말들로 사랑하는 여인 크리스틴 팔머마저 그의 곁을 떠나게 만든다. 그는 치료를 위해 히말라야의 영적 지도자, 에인션트 원을 만나 마지막 희망을 걸고 수련을 시작한다. 스트레인지는 빠르게 마법을 터득해 나가는 동시에 세계의 작동원리와 우주를 정복하려는 도르마무 일당의 계략을 알게 된다.",
        },
        {
          title: "앰뷸런스",
          photo: "/t28iy60uX4sRZhKo2MMxCKyQw1a.jpg",
          releasedAt: "2022-03-16",
          actor: null,
          director: null,
          genre: null,
          description:
            "인생 역전을 위해 완벽한 범죄를 설계한 형 대니와 아내의 수술비를 마련해야만 하는 동생 윌, 함께 자랐지만 서로 다른 인생을 살아온 두 형제는 각기 다른 목적을 위해 인생을 바꿀 위험한 계획에 뛰어들게 된다. 그러나 한 순간의 잘못된 선택으로 인해 모든 계획이 틀어지게 된 두 형제는 구급대원 캠과 부상당한 경찰이 탑승한 앰뷸런스를 탈취해 LA 역사상 가장 위험한 질주를 하게 되는데....",
        },
        {
          title: "Virus-32",
          photo: "/3CvBuw9aoziJJAbqymmsF2drnzH.jpg",
          releasedAt: "2022-04-21",
          actor: null,
          director: null,
          genre: null,
          description: "",
        },
        {
          title: "포트리스: 스나이퍼스 아이",
          photo: "/61J34xHVVdQHbJ4MSCWQo4e727v.jpg",
          releasedAt: "2022-04-29",
          actor: null,
          director: null,
          genre: null,
          description: "",
        },
        {
          title: "아웃핏",
          photo: "/yju3CSIR8fdNsZyPdMsUun7XQnd.jpg",
          releasedAt: "2022-02-25",
          actor: null,
          director: null,
          genre: null,
          description: "시카고에 자리잡은 영국인 양복점 명장이 갱스터들과 엮이면서 겪게 되는 위험한 생존 게임을 다룬 영화",
        },
        {
          title: "365일: 오늘",
          photo: "/7qU0SOVcQ8BTJLodcAlulUAG16C.jpg",
          releasedAt: "2022-04-27",
          actor: null,
          director: null,
          genre: null,
          description: "재결합하여 그 어느 때보다도 열렬한 관계를 이어가는 라우라와 마시모. 하지만 마시모의 가족 관계, 그리고 라우라의 마음을 얻으려는 수수께끼의 남자로 인해 삶이 복잡해진다.",
        },
        {
          title: "로스트 시티",
          photo: "/8kZapNBZYGJu7AUbJVBDMmQgO1D.jpg",
          releasedAt: "2022-03-24",
          actor: null,
          director: null,
          genre: null,
          description:
            "전설의 트레저를 차지하기 위해 재벌 페어팩스(다니엘 래드클리프)는  유일한 단서를 알고 있는 베스트셀러 작가 로레타(산드라 블록)를 납치하게 된다.  어쩔 수 없는 비지니스 관계로 사라진 그녀를 찾아야만 하는 책 커버모델 앨런(채닝 테이텀)은  의문의 파트너(브래드 피트)와 함께 위험한 섬에서 그녀를 구하고 무사히 탈출해야만 하는데…  적과 자연의 위험이 도사리는 일촉즉발 화산섬.",
        },
        {
          title: "엔칸토: 마법의 세계",
          photo: "/b8gz7UKMwMz39mz6EH5Jjicjdth.jpg",
          releasedAt: "2021-11-24",
          actor: null,
          director: null,
          genre: null,
          description:
            "콜롬비아의 깊은 산 속, 놀라운 마법과 활기찬 매력이 넘치는 세계 엔칸토. 이곳을 만든 장본인은 마드리갈 가문의 기둥인 알마 할머니(마리아 세실리아 보테로)다. 그녀는 젊었을 때 세 쌍둥이를 데리고 이곳으로 오던 중에 위기를 맞았다. 그때 그녀가 들고 있던 촛불에 기적이 일어났고 그이후로 마법의 능력이 손주 세대까지 대물림된다. 3대에 걸친 이대가족은 음식으로 병을 고치는 능력, 꽃을 피우는 능력, 날씨를 조종 하는 능력 등 저마다 독특한 능력을 지니게 됐다. 하지만 가족 중 유일하게 미라벨(스테퍼니 비어트리즈)만 아무런 능력이 없다. 어느 날 엔칸토가 지닌 마법의 힘이 위험에 처하고 가족들은 점차 자신의 능력을 잃어가기 시작한다. 이를 감지한 미라벨은 유일하게 평범한 자신이 특별한 이 가족의 마지막 희망일지 모른다고 생각하는데...",
        },
        {
          title: "실버턴 포위 작전",
          photo: "/5HruMN0vvl84AqD7sCDXFNO4RhP.jpg",
          releasedAt: "2022-04-27",
          actor: null,
          director: null,
          genre: null,
          description: "남아공 인종차별 정책에 저항해 파괴 공작을 감행하는 자유 투사 3인방. 작전에 실패한 그들이 은행에서 숨 막히는 인질극을 벌이게 된 까닭은 무엇일까. 실화에 바탕을 둔 이야기.",
        },
        {
          title: "모비우스",
          photo: "/8uiV88A5eB7PjMTtY6lQBUZ0Cpl.jpg",
          releasedAt: "2022-03-30",
          actor: null,
          director: null,
          genre: null,
          description:
            "희귀혈액병을 앓고 있는 생화학자 모비우스는 동료인 마르틴과 함께 치료제 개발에 몰두한다. 흡혈 박쥐를 연구하던 중 마침내 치료제 개발에 성공한 모비우스는 새 생명과 강력한 힘을 얻게 되지만, 동시에 흡혈을 하지 않고는 생명을 유지할 수 없게 된다. 그러던 중 모비우스와 같은 병을 앓고 있던 그의 친구 마일로도 모비우스와 같은 힘을 얻게 되는데…",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("movies", null, {});
  },
};
