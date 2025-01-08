import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewSection from "./components/NewSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import StartLearning from "./components/StartLearning";
import ChatbotPage from "./components/ChatbotPage";
import LevelsPage from "./components/LevelsPage";
import LevelDetailsPage from "./components/LevelDetailsPage";
import StartQuiz from "./components/StartQuiz"; // Import the StartQuiz component

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Define routes for the application */}
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Dashboard />
                <HeroSection />
                <NewSection />
                <Features />
                <Footer />
              </>
            }
          />

          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* Start Learning page */}
          <Route path="/start-learning" element={<StartLearning />} />

          {/* Chatbot page */}
          <Route path="/chatbot" element={<ChatbotPage />} />

          {/* Levels page */}
          <Route path="/levels" element={<LevelsPage />} />

          {/* Level Details page with dynamic parameter */}
          <Route path="/level-details/:level" element={<LevelDetailsPage />} />

          {/* Start Quiz page */}
          <Route path="/start-quiz" element={<StartQuiz />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
