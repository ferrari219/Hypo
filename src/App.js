import React, { Component } from "react";
import QinfoList from "./Components/QinfoList";

class App extends Component {
  id = 1;
  state = {
    t: [
      'a','b','c'
    ],
    i: 0,
    dahyul: 0,
    damjp: 0,
    ooul: 0,
    jumak: 0,

    information: [
      {
        id: 0,
        a1: "생동감 있다.",
        a2: "모험적이다.",
        a3: "분석적이다.",
        a4: "융통성 있다."
      },
      {
        id: 1,
        a1: "쾌활하다",
        a2: "설득력이 있다",
        a3: "끈기 있다",
        a4: "평온하다"
      },
      {
        id: 2,
        a1: "사교적이다",
        a2: "의지가 강하다",
        a3: "희생적이다",
        a4: "순응한다"
      },
      {
        id: 3,
        a1: "매력 있다",
        a2: "경쟁심이 있다",
        a3: "이해심이 많다",
        a4: "감정을 억제한다"
      },
      {
        id: 4,
        a1: "참신하다",
        a2: "능력이 비상하다",
        a3: "존중하다",
        a4: "삼가다"
      },
      {
        id: 5,
        a1: "신나하는 편",
        a2: "독자적인 편",
        a3: "민감한 편",
        a4: "수용적인 편"
      },
      {
        id: 6,
        a1: "장려하다",
        a2: "긍정적이다",
        a3: "계획하다",
        a4: "참을성이 있다"
      },
      {
        id: 7,
        a1: "충동적인 편",
        a2: "확신하는 형",
        a3: "계획을 따르는 편",
        a4: "과묵하다"
      },
      {
        id: 8,
        a1: "낙천적이다",
        a2: "솔직하다",
        a3: "질서 있다",
        a4: "포용력 있다"
      },
      {
        id: 9,
        a1: "재담이 있다",
        a2: "주관이 뚜렷하다",
        a3: "신실하다",
        a4: "응답적이다"
      },
      {
        id: 10,
        a1: "즐겁다",
        a2: "겁이 없다",
        a3: "섬세하다",
        a4: "외교적이다"
      },
      {
        id: 11,
        a1: "명랑하다",
        a2: "자신감 있다",
        a3: "문화적이다",
        a4: "안정되다"
      },
      {
        id: 12,
        a1: "고무하는 편",
        a2: "독립적이다",
        a3: "이상적이다",
        a4: "거슬리지 않는다"
      },
      {
        id: 14,
        a1: "표현하는 편",
        a2: "단호하다",
        a3: "몰두하는 편",
        a4: "정색하고 농담한다"
      },
      {
        id: 15,
        a1: "쉽게 어울린다",
        a2: "행동가형",
        a3: "음악을 좋아한다",
        a4: "중재하는 형"
      },
      {
        id: 16,
        a1: "말하기 좋아한다",
        a2: "성취 지향적",
        a3: "사려 깊은 편",
        a4: "관대하다"
      },
      {
        id: 17,
        a1: "열정적이다",
        a2: "책임감 있다",
        a3: "충성스러운 편",
        a4: "잘 듣는다"
      },
      {
        id: 18,
        a1: "무대형이다",
        a2: "지도력이 있다",
        a3: "조직적이다",
        a4: "만족하는 편"
      },
      {
        id: 19,
        a1: "인기 있다",
        a2: "생산적이다",
        a3: "완벽을 추구한다",
        a4: "편안하다"
      },
      {
        id: 20,
        a1: "활기 있다",
        a2: "담대하다",
        a3: "예의바르다",
        a4: "중도적이다"
      },
      {
        id: 21,
        a1: "허세를 부린다",
        a2: "권세를 부린다",
        a3: "숫기가 없다",
        a4: "무표정하다"
      },
      {
        id: 22,
        a1: "규율이 없다",
        a2: "동정심이 없다",
        a3: "용서하지 않다",
        a4: "열정이 없다"
      },
      {
        id: 23,
        a1: "중언부언하다",
        a2: "거스른다",
        a3: "분을 품다",
        a4: "상관이 없다"
      },
      {
        id: 24,
        a1: "건망증이 있다",
        a2: "노골적이다",
        a3: "까다롭다",
        a4: "두려워하다"
      },
      {
        id: 25,
        a1: "중간에 끼어든다",
        a2: "성급하다",
        a3: "자신감이 없다",
        a4: "결단력이 없다"
      },
      {
        id: 26,
        a1: "예측할 수 없다",
        a2: "애정표현이 없다",
        a3: "인기 없다",
        a4: "관계하지 않다"
      },
      {
        id: 27,
        a1: "되는대로 하다",
        a2: "완고하다",
        a3: "불만이 많은 편",
        a4: "망설이는 편"
      },
      {
        id: 28,
        a1: "방임하다",
        a2: "교만하다",
        a3: "염세적이다",
        a4: "단조롭다"
      },
      {
        id: 29,
        a1: "쉽게 분노하다",
        a2: "논쟁을 좋아하다",
        a3: "자신을 격리하다",
        a4: "목표가 없다"
      },
      {
        id: 30,
        a1: "피상적이다",
        a2: "자만하다",
        a3: "부정적이다",
        a4: "안일하다"
      },
      {
        id: 31,
        a1: "칭찬을 바라다",
        a2: "일벌레 형",
        a3: "뒤로 물러서는 편",
        a4: "염려하다"
      },
      {
        id: 32,
        a1: "말이 많다",
        a2: "무례하다",
        a3: "과민하다",
        a4: "소심하다"
      },
      {
        id: 33,
        a1: "무질서하다",
        a2: "지배하다",
        a3: "낙담하다",
        a4: "확신이 없다"
      },
      {
        id: 34,
        a1: "일관성이 없다",
        a2: "관대하지 못하다",
        a3: "내성적이다",
        a4: "무관심하다"
      },
      {
        id: 35,
        a1: "어지르는 편",
        a2: "조종하다",
        a3: "우울한 편",
        a4: "중얼거린다"
      },
      {
        id: 36,
        a1: "과시하다",
        a2: "고집이 세다",
        a3: "회의적이다",
        a4: "느리다"
      },
      {
        id: 37,
        a1: "시끄러운 편",
        a2: "주장하다",
        a3: "외로운 편",
        a4: "게으른 편"
      },
      {
        id: 38,
        a1: "산만한 편",
        a2: "성미가 급하다",
        a3: "의심 많은 편",
        a4: "나태하다"
      },
      {
        id: 39,
        a1: "침착하지 못한 편",
        a2: "경솔하다",
        a3: "양심이 많은 편",
        a4: "마지못해 하다"
      },
      {
        id: 40,
        a1: "변덕스럽다",
        a2: "약삭빠르다",
        a3: "비판적이다",
        a4: "타협하는 형"
      }
    ],
    maxi: 5, //문항갯수
    Max1: 0, //최대값1
    Max2: 0, //최대값2
    result: [
      {
        id: 0,
        ttl: '대중적 다혈질 - 웅변적, 외향적, 낙천적',
        desc: [
          '다른 사람에게 호감을 준다.',
          '무슨 일이든 쉽게 자원한다.',        
          '이야기를 좋아한다.',
          '새로운 일을 만들어 낸다.',
          '파티를 좋아한다.',
          '겉으로 잘하는 것처럼 보인다.',
          '유머 감각이 있다.',
          '창조적이고 기발하다.',
          '기억력이 좋다.',
          '힘과 정력이 넘친다.',        
          '피부 접촉을 좋아한다.',
          '힘과 정력이 넘친다.',
          '감정이 풍부하다.',
          '다른 사람들을 끌어들인다.',
          '적극적으로 자신을 표현한다.',
          '다른 사람들이 일하게 만든다.',
          '명랑하다.',
          '호기심이 많다.',
          '무대 체질이다.',
          '순진하고 순박하다.'
        ],
      },
      {
        id: 1,
        ttl: '역동적 담즙질 - 행동가, 외향적, 낙천적',
        desc: [
          '천성적 지도자이다.',
          '목표 지향적이다.',
          '역동적이고 활동적이다.',
          '전체를 바라본다.',
          '변화를 필요로 한다.',
          '조직적이다.',
          '잘못된 것은 고쳐야 한다.',
          '실제적인 해결책을 찾는다.',
          '의지가 강하고 단호하다.',
          '즉시 행동에 옮긴다.',
          '감정에 치우치지 않는다.',
          '다른 사람에게 위임한다.',
          '쉽게 낙담하지 않는다.',
          '생산성에 역점을 둔다.',
          '독립적이다.',
          '목표를 설정한다.',
          '자신감이 있다.',
          '다른 사람들을 참여시킨다.',
          '무엇이든지 감당할 수 있다.',
          '반대에도 굴하지 않는다.',
        ]
      },
      {
        id: 2,
        ttl: '완벽주의 우울질 - 사색가, 내성적, 비관적',
        desc: [
          '사려 깊다.',
          '짜여진 계획에 따라 일한다.',
          '분석적이다.',
          '완벽주의자로서 높은 표준을 갖는다.',
          '진지하고 목적의식이 있다.',
          '세세한 것까지 신경을 쓴다.',
          '천재적인 면이 있다.',
          '꾸준하고 철저하다.',
          '재능이 있고 창조적이다.',
          '질서 있고 조직력이 있다.',
          '예술적이다.',
          '깔끔하다.',
          '철학적이고 시적이다.',
          '경제적이다.',
          '심미안이 있다.',
          '문제를 파악한다.',
          '창조적인 해결책을 갖는다.',
          '다른 사람들에게 민감하다.',
          '시작한 것은 끝을 내야 한다.',
          '자기희생적이다.',
          '도표와 그래프와 목록을 좋아한다.',
          '신중하다.',
          '이상을 추구한다.',
        ]
      },
      {
        id: 3,
        ttl: '평온한 점액질 - 관찰자, 내성적, 비관적',
        desc: [
          '겸손하고 온유하다.',
          '유능하고 꾸준하다.',
          '태평스럽고 느긋하다',
          '평화롭고 상냥하다.',
          '고요하고 냉정하고 침착하다.',
          '행정능력이 있다.',
          '인내심이 있다.',
          '문제를 중재한다.',
          '균형 잡힌 생활을 한다.',
          '다투지 않는다.',
          '일관성이 있다.',
          '압력을 받아도 잘 견딘다.',
          '조용하지만 위트가 있다.',
          '쉬운 길을 찾는다.',
          '동점심이 있고 친절하다.',
          '감정을 드러내지 않는다.',
          '현실을 즐겁게 받아들인다.',
          '어떤 일에도 잘 적응한다.',
        ]
      },
    ]
  };
  // maxi = this.state.maxi;
  
  handleCount = (e) => {
    switch (e.target.value) {
      case "dahyul":
        const { dahyul } = this.state;
        this.setState({
          [e.target.value]: dahyul + 1
        });
        break;
      case "damjp":
        const { damjp } = this.state;
        this.setState({
          [e.target.value]: damjp + 1
        });
        break;
      case "ooul":
        const { ooul } = this.state;
        this.setState({
          [e.target.value]: ooul + 1
        });
        break;
      case "jumak":
        const { jumak } = this.state;
        this.setState({
          [e.target.value]: jumak + 1
        });
        break;
      default:
        break;
    }
  };
  handleNext = () => {
    // if (this.id <= this.maxi) {
    this.setState({
      i: this.id++
    });
    // }
    // else{
    //   const { handleResult } = this;
    //   handleResult();
    // }
  };

  handleResult = () => {
    //alert(e)
    const { dahyul, damjp, ooul, jumak } = this.state;
    // const result = Math.max(dahyul, damjp, ooul, jumak);
    const list = [dahyul, damjp, ooul, jumak];
    // const list2 = ["다혈", "담즙", "우울", "점액"];

    let MxNum = 0; //첫번째로 큰값
    let SxNum = 0; //두번째로 큰값
    // let MxG = ''; //기질판독값
    // let SxG = ''; //기질판독값
    let Result1 = 0; //기질번호
    let Result2 = 0; //기질번호
    
    for (let k = 0; k < list.length; k++) { 
      if (MxNum < list[k]) { 
        SxNum = MxNum; 
        MxNum = list[k]; 
        Result1 = k;
        // MxG = list2[k];
      } 
      else if (SxNum <= list[k]) {
        SxNum = list[k];
        Result2 = k;
        // SxG = list2[k];
      }
    }
    // alert(" "+Result1+"이고, "+Result2+"입니다.")

    // alert("당신의 주기질은 "+MxG+"이고, 부기질은 "+SxG+"입니다.")
    // return (Result1, Result2);
    this.setState({
      max1: Result1,
      max2: Result2
    })
  };

  render() {
    //alert(this.state.information[0].a1);
    const { handleCount, handleNext, handleResult } = this;
    return (
      <div>
        <h1>히포크라테스 기질 테스트</h1>
        <QinfoList
          data={this.state.information}
          onCounter={handleCount}
          i={this.state.i}
          maxi={this.state.maxi}
          onNext={handleNext}
          onResult={handleResult}
          max1={this.state.max1} max2={this.state.max2} 
          result={this.state.result}
        />
        <div className="score">
          &nbsp;&nbsp; {JSON.stringify(this.state.i)}
          &nbsp;&nbsp; {JSON.stringify(this.state.maxi)}
          <br />
          &nbsp;&nbsp; {JSON.stringify(this.state.dahyul)}
          &nbsp;&nbsp; {JSON.stringify(this.state.damjp)}
          &nbsp;&nbsp; {JSON.stringify(this.state.ooul)}
          &nbsp;&nbsp; {JSON.stringify(this.state.jumak)}
          &nbsp;&nbsp;
        </div>
      </div>
    );
  }
}

export default App;
