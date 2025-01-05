import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your API key
          },
        }
      );

      if (response.data.choices && response.data.choices.length > 0) {
        const botMessage = {
          text: response.data.choices[0].message.content,
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        console.error("No response choices from OpenAI");
        const errorMessage = {
          text: "Sorry, I couldn't process your request. Please try again later.",
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
      if (error.response) {
        // If there was a response error (e.g., 400, 401, 500)
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        // If the request was made but no response was received
        console.error("Request error:", error.request);
      } else {
        // Something else went wrong
        console.error("Error message:", error.message);
      }

      const errorMessage = {
        text: "Sorry, I couldn't process your request. Please try again later.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-header">AI Chatbot</h1>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chatbot-message ${msg.sender === "bot" ? "bot" : "user"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatbotPage;
