import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import "../App.css"; // Make sure to link the CSS file

const LevelsPage = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // State to track if the user clicked "Start" on any level
  const [levelStarted, setLevelStarted] = useState(false);

  const goToLevelDetails = (level) => {
    // Set the levelStarted to true when any "Start" button is clicked
    setLevelStarted(true);

    // Delay the navigation by 1 second to ensure the recorder emoji is visible
    setTimeout(() => {
      // Navigate to the level details page for the selected level
      navigate(`/level-details/${level}`);
    }, 1000); // 1-second delay
  };

  return (
    <div className="levels-page">
      <h1 className="levels-heading">Let's start with the levels of your potential</h1>
      <div className="levels-container">
        <div className="level-container">
          <div className="level">
            <h2 className="level-heading">Easy</h2>
            <p className="level-description">
              A simple level to test your basic skills and concepts.
            </p>
            <button
              className="start-button"
              onClick={() => goToLevelDetails("easy")}
            >
              Start
            </button>
          </div>
        </div>
        <div className="level-container">
          <div className="level">
            <h2 className="level-heading">Medium</h2>
            <p className="level-description">
              A more challenging level to push your abilities further.
            </p>
            <button
              className="start-button"
              onClick={() => goToLevelDetails("medium")}
            >
              Start
            </button>
          </div>
        </div>
        <div className="level-container">
          <div className="level">
            <h2 className="level-heading">Hard</h2>
            <p className="level-description">
              The hardest challenge to fully test your potential.
            </p>
            <button
              className="start-button"
              onClick={() => goToLevelDetails("hard")}
            >
              Start
            </button>
          </div>
        </div>
      </div>

      {/* Recorder Emoji Appears Once User Clicks Start on Any Level */}
      {levelStarted && (
        <div className="recorder-option">
          <span role="img" aria-label="recorder">
            🎙️ Start Recording
          </span>
        </div>
      )}
    </div>
  );
};

export default LevelsPage;
