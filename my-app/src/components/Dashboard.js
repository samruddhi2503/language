import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const navigateToLearning = () => {
    setIsOpen(false);
    navigate("/start-learning"); // Navigate to the Start Learning page
  };

  const navigateToChatbot = () => {
    setIsOpen(false);
    navigate("/chatbot"); // Navigate to the Chatbot page
  };

  const navigateToQuiz = () => {
    setIsOpen(false);
    navigate("/start-quiz"); // Navigate to the Start Quiz page
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isOpen]);

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <button className="dashboard-button" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>

      {isOpen && (
        <div
          className="dashboard-menu"
          ref={menuRef}
          style={{
            left: isOpen ? "0" : "-300px", // Slide in from left
            transition: "left 0.3s ease-in-out",
          }}
        >
          <ul>
            <li>Contact Us</li>
            <li onClick={navigateToChatbot}>Chat Bot</li> {/* Navigate to Chatbot */}
            <li onClick={navigateToLearning}>Start Learning</li> {/* Navigate to Start Learning */}
            <li onClick={navigateToQuiz}>Start Quiz</li> {/* Navigate to Start Quiz */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
