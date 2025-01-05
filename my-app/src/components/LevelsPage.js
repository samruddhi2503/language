import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import "../App.css"; // Make sure to link the CSS file

const LevelsPage = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const goToLevelDetails = (level) => {
    // Navigate to the level details page for the selected level
    navigate(`/level-details/${level}`);
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
              onClick={() => goToLevelDetails("easy")} // Navigate on click
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
              onClick={() => goToLevelDetails("medium")} // Navigate on click
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
              onClick={() => goToLevelDetails("hard")} // Navigate on click
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelsPage;
