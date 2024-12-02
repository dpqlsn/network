import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setMessages((prev) => [
      ...prev,
      { text: Response(input), sender: "bot" },
    ]);
    setInput("");
  };

  const Response = (text) => {
    return '체크체크'
  };

  return (
    <div className="chat-app">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="대화하셍"
        />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
};

export default App;