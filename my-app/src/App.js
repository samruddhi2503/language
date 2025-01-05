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
import ChatbotPage from "./components/ChatbotPage"; // Import the ChatbotPage component
import LevelsPage from "./components/LevelsPage"; // Import the LevelsPage component
import LevelDetailsPage from "./components/LevelDetailsPage"; // Import LevelDetailsPage component

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Other routes */}
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
          <Route path="/login" element={<Login />} />
          <Route path="/start-learning" element={<StartLearning />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/levels" element={<LevelsPage />} /> {/* LevelsPage route */}
          <Route path="/level-details/:level" element={<LevelDetailsPage />} /> {/* LevelDetailsPage route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
