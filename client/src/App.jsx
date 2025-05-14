import React, { useState, useEffect } from "react";
import io from "socket.io-client";

// Connect to backend
const socket = io("http://localhost:5000"); // ✅ Correct protocol

const App = () => {
  const [messages, setMessage] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessage((prev) => [...prev, msg]); // ✅ use latest state
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      socket.emit("message", messageInput);
      setMessageInput("");
    }
  };

  return (
    <div>
      <h1>Simple Chat App</h1>

      <input
        type="text"
        value={messageInput}
        placeholder="Type your message..."
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>

      <section>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </section>
    </div>
  );
};

export default App;
