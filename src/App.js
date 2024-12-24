import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // 유저가 메시지를 보내면 로봇이 받음
  const handleSendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setMessages((prev) => [
      ...prev,
      { text: Response(input), sender: "bot" },
    ]);
    setInput("");
  };

  const handleSendVoice = () => {
    console.log("음성 메시지 전송 기능은 아직 구현되지 않았습니다!");
    // 음성을 받을 로직을 여기에 구현하세요.
  };

  // 유저가 내용을 넣으면 로봇이 하는 말
  const Response = (text) => {
    const lowerText = text.trim().toLowerCase();
    if (["안녕하세요", "안녕하세요!", "안녕!", "안녕", "반가워", '반가워요', "반가웡"].includes(lowerText)) {
      return "안녕하세요? 정말 반가워요! 오늘 하루도 행복하게 보내고 계신가요?";
    }
    if (["잘가"].includes(lowerText)) {
      return "안녕히 가세요!";
    }
    if (["고마워", "고마웡", "고마워요"].includes(lowerText)) {
      return "천만에요!";
    }
    if (["이름이 뭐야?", "이름이 뭐야", "이름이 뭐니?", "이름이 뭐니"].includes(lowerText)) {
      return "제 이름은 소마(SOMA)예요. 소프트웨어 마이스터고의 앞글자를 따와서 지어진 이름이죠.";
    }
    if (
      ["오늘 날씨가 어때요?", "오늘 날씨가 어때요", "오늘 날씨가 어때?", "오늘 날씨가 어때"].includes(
        lowerText
      )
    ) {
      return "오늘 날씨는 정말 맑고 기분 좋은 날이에요! 밖에 나가서 산책해보시는 건 어떨까요?";
    }
    if (["무엇을 하면 좋을까요?", "무엇을 하면 좋을까요", "무엇을 하면 좋을까?", "무엇을 하면 좋을까"].includes(lowerText)) {
      return "다양한 선택이 있어요! 책을 읽거나, 좋아하는 음악을 듣는 것도 좋고, 친구와 즐거운 시간을 보내는 것도 정말 행복하답니다!";
    }
    if (["요즘 힘들어요", "요즘 힘들어"].includes(lowerText)) {
      return "힘든 시간을 겪고 계시군요. 언제나 당신의 마음을 이해해요. 조금씩 나아질 거예요.";
    }
    if (["무엇을 하면 좋을까요?", "무엇을 하면 좋을까요", "무엇을 하면 좋을까?", "무엇을 하면 좋을까"].includes(lowerText)) {
      return "다양한 선택이 있어요! 책을 읽거나, 좋아하는 음악을 듣는 것도 좋고, 친구와 즐거운 시간을 보내는 것도 정말 행복하답니다!";
    }
    if (["내일 뭐 할까?", "내일 뭐 할까", "내일 뭐 할까요", "내일 뭐 할까요?", "내일 뭐할까", "내일 뭐할까?", "내일 뭐할까요", "내일 뭐할까요?"].includes(lowerText)) {
      return "내일은 새로운 일들을 시도해보는 건 어떨까요? 작은 계획이라도 세워보면 재미있을 거예요! 예를 들어 일기를 써서 하루를 기록하는 건 어떄요?";
    }
    if (["좋은 책 추천해줄 수 있어요?", "좋은 책 추천해줄 수 있어요", "좋은 책 추천해줄 수 있어?", "좋은 책 추천해줄 수 있어?"].includes(lowerText)) {
      return "물론이죠! 마음에 드는 책을 찾는 것은 정말 즐거운 일이에요.";
    }
    if (["요리하는 게 어려워요", "요리하는 게 어려워"].includes(lowerText)) {
      return "물론이죠! 마음에 드는 책을 찾는 것은 정말 즐거운 일이에요.";
    }
    if (["좋은 책 추천해줄 수 있어요?", "좋은 책 추천해줄 수 있어요", "좋은 책 추천해줄 수 있어?", "좋은 책 추천해줄 수 있어?"].includes(lowerText)) {
      return "요리는 처음엔 어려울 수 있지만, 조금씩 연습하다 보면 정말 재미있어져요! 간단한 레시피부터 시작해보면 좋을 것 같아요. 우선 계란프라이 부터 만들어볼까요?";
    }
    if (["친구가 없어요", "친구가 없어"].includes(lowerText)) {
      return "친구를 사귀는 건 시간이 걸릴 수 있지만, 걱정하지 마세요! 새로운 사람을 만날 기회는 언제나 있어요. 취미 활동이나 모임에 참여해보는 건 어떨까요?";
    }
    if (["취미가 뭐예요?", "취미가 뭐예요", "취미가 뭐야", "취미가 뭐야?"].includes(lowerText)) {
      return "저의 취미는 여러분과 소통하는 거예요! 여러분의 이야기를 듣고 도와주는 것이 정말 즐겁답니다.";
    }
    if (["요즘 너무 지쳐요", "요즘 너무 지쳐"].includes(lowerText)) {
      return "지친 마음을 이해해요. 가끔은 잠시 쉬어가는 것도 중요해요. 좋아하는 영화를 보거나 편안한 음악을 듣는 건 어떨까요?";
    }
    if (["나이가 많아서 걱정이에요", "나이가 많아서 걱정이야", "어리고 싶어"].includes(lowerText)) {
      return "나이는 숫자에 불과해요! 언제든지 새로운 것을 배우고 도전할 수 있답니다. 긍정적인 마음으로 즐기세요!";
    }
    if (["사람들 앞에 서는 게 두려워요", "사람들 앞에 서는 게 두려워", "사람들 앞에 서는 게 무서워요", "사람들 앞에 서는게 무서워","사람들 앞에 서는게 두려워요", "사람들 앞에 서는게 두려워", "사람들 앞에 서는게 무서워요", "사람들 앞에 서는게 무서워"].includes(lowerText)) {
      return "그런 기분, 정말 이해해요. 조금씩 연습해보면서 자신감을 키워보세요. 당신은 충분히 멋진 사람이에요!";
    }
    if (["여행 가고 싶어", "여행 가고 싶어요"].includes(lowerText)) {
      return "여행은 정말 멋진 경험이에요! 가까운 곳부터 시작해보면 새로운 재미를 찾을 수 있을 거예요.";
    }
    if (["오늘 기분이 안 좋아요", "오늘 기분이 안 좋아", "오늘 기분이 안좋아", "오늘 기분이 안좋아요"].includes(lowerText)) {
      return "그런 기분을 느끼는 건 자연스러운 일이에요. 누군가에게 이야기하는 것도 좋고, 자신을 잘 돌보는 시간이 필요해요. 언제든지 이야기를 나눠요!";
    }
    if (["어떤 음악이 좋을까요?", "어떤 음악이 좋을까요", "어떤 음악이 좋을까", "어떤 음악이 좋을까?"].includes(lowerText)) {
      return "음악은 사람마다 다르지만, 기분을 좋게 해주는 음악을 찾아보는 건 정말 즐거운 일이에요! 어떤 장르를 좋아하세요?";
    }
    if (["나의 꿈이 무엇일까요?", "나의 꿈이 무엇일까", "나의 꿈이 무엇일까요", "나의 꿈이 무엇일까?"].includes(lowerText)) {
      return "꿈은 여러 가지일 수 있어요. 자신이 좋아하는 일을 생각해보는 것도 좋은 방법이에요.";
    }
    if (["혼자 있는 게 외로워요", "혼자 있는 게 외로워", "혼자 있는게 외로워요", "혼자 있는게 외로워"].includes(lowerText)) {
      return "외로움을 느끼는 건 자연스러운 일이에요. 친구나 가족과 연락해보는 것도 좋고, 새로운 모임에 참여해보는 것도 좋은 방법이에요!";
    }
    if (["시간을 어떻게 관리하나요?", "시간을 어떻게 관리하나요", "시간을 어떻게 관리해?", "시간을 어떻게 관리해"].includes(lowerText)) {
      return "시간을 잘 관리하는 것은 중요한 일이에요! 작은 목표를 세우고 우선순위를 정해보면 도움이 될 거예요. 같이 해볼까요?";
    }
    if (["어떻게 하면 더 행복해질 수 있을까요?", "어떻게 하면 더 행복해질 수 있을까요", "어떻게 하면 더 행복해질 수 있을까", "어떻게 하면 더 행복해질 수 있을까?"].includes(lowerText)) {
      return "행복은 작은 것에서부터 시작해요. 감사한 마음을 가지면 더욱 행복을 느낄 수 있어요. 오늘 감사한 일은 무엇이었나요?";
    }
    if (["제 고민을 들어줄 수 있나요?", "제 고민을 들어줄 수 있나요", "제 고민을 들어줄 수 있어?", "제 고민을 들어줄 수 있어"].includes(lowerText)) {
      return "물론이죠! 당신의 이야기를 듣는 것은 정말 중요해요. 언제든지 편하게 이야기해보세요. 함께 고민해볼게요!";
    }
    return "죄송해요, 아직 그 질문에 대한 답변은 준비되지 않았어요!";
  };

  return (
    <div className="chat-app">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "bot"}`} // CSS 적용
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // 사용자가 대화 내용을 넣을 수 있게
          placeholder="대화하셍"
        />
        <button onClick={handleSendMessage}>전송</button>
        <button onClick={handleSendVoice}>음성</button>
      </div>
    </div>
  );
};

export default App;
