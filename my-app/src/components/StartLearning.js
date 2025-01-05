import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import CSS for custom styles

const StartLearning = () => {
  const [formData, setFormData] = useState({
    age: "",
    language: "",
    triedBefore: "", // Use an empty string to represent "no selection"
  });

  const navigate = useNavigate(); // For programmatic navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // For radio buttons, we store the selected value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Navigate to the LevelsPage after form submission
    navigate("/levels");
  };

  return (
    <div className="start-learning">
      <h1>Welcome to Multilingo</h1>
      <p>Here you can begin your language journey!</p>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="age">Enter Your Age:</label>
            <input 
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="language">Interested Language:</label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
            >
              <option value="">Select Your Language</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Mandarin">Mandarin</option>
              {/* Add more languages as needed */}
            </select>
          </div>

          <div className="form-group">
            <label>Have you tried to learn this language before?</label>
            <div>
              <label>
                <input
                  type="radio"
                  id="triedBeforeYes"
                  name="triedBefore"
                  value="Yes"
                  checked={formData.triedBefore === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="triedBeforeNo"
                  name="triedBefore"
                  value="No"
                  checked={formData.triedBefore === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group">
            <button type="submit">Start Learning</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartLearning;
