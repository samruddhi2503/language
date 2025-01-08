import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

// Check for browser compatibility for Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const LevelDetailsPage = () => {
  const { level, language } = useParams();

  // Default to Spanish if language is undefined
  const currentLanguage = language ? language.toLowerCase() : "spanish";

  // State to track recording for each stage
  const [recordingState, setRecordingState] = useState({});

  // State to store transcript for each stage
  const [transcripts, setTranscripts] = useState({});

  // Initialize SpeechRecognition API
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US"; // You can change this depending on the language
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  // Handle the start of recording for a specific stage
  const startRecording = (stageIndex) => {
    setRecordingState((prevState) => ({
      ...prevState,
      [stageIndex]: true,
    }));
    recognition.start(); // Start recording for the selected stage
  };

  // Handle the stop of recording for a specific stage
  const stopRecording = (stageIndex) => {
    setRecordingState((prevState) => ({
      ...prevState,
      [stageIndex]: false,
    }));
    recognition.stop(); // Stop recording for the selected stage
  };

  // Update the transcript as speech is recognized for a specific stage
  recognition.onresult = (event) => {
    const currentTranscript = event.results[event.resultIndex][0].transcript;
    const stageIndex = event.resultIndex; // Use resultIndex as stageIndex
    setTranscripts((prevState) => ({
      ...prevState,
      [stageIndex]: currentTranscript,
    }));
  };

  // Handle the end of the speech recognition for a specific stage
  recognition.onend = () => {
    const lastStageIndex = Object.keys(recordingState).find(
      (key) => recordingState[key] === true
    );
    if (lastStageIndex) {
      setRecordingState((prevState) => ({
        ...prevState,
        [lastStageIndex]: false,
      }));
    }
  };

  // Function to pronounce a specific stage's data
  const pronounceStageData = (stageData) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(stageData);
      utterance.lang = "en-US"; // Adjust language code as per the content
      utterance.rate = 1; // Speed of the speech
      utterance.pitch = 1; // Pitch of the speech
      utterance.volume = 1; // Volume (0.0 to 1.0)

      // Handle errors in speech synthesis
      utterance.onerror = (event) => {
        console.error("Speech synthesis error:", event.error);
      };

      // Clear any pending or speaking utterances and then speak
      if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
        window.speechSynthesis.cancel();
      }
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Speech Synthesis is not supported in your browser.");
    }
  };

  // Stage content based on the selected language and level
  const stages = {
    spanish: {
      easy: [
        "Stage 1: Hola, ¿cómo estás? (Translation: 'Hello, how are you?')",
        "Stage 2: Me llamo Juan. (Translation: 'My name is Juan.')",
        "Stage 3: Tengo 20 años. (Translation: 'I am 20 years old.')"
      ],
      medium: [
        "Stage 1: Me gusta mucho la música...",
        "Stage 2: Mi ciudad es muy bonita...",
        "Stage 3: El fin de semana pasado fui a la playa..."
      ],
      hard: [
        "Stage 1: Las ciencias son fundamentales...",
        "Stage 2: El cambio climático...",
        "Stage 3: La inteligencia artificial..."
      ]
    },
    french: {
      easy: [
        "Stage 1: Bonjour, comment ça va? (Translation: 'Hello, how are you?')",
        "Stage 2: Je m'appelle Jean. (Translation: 'My name is Jean.')",
        "Stage 3: J'ai 20 ans. (Translation: 'I am 20 years old.')"
      ],
      medium: [
        "Stage 1: J'aime beaucoup la musique...",
        "Stage 2: Ma ville est très belle...",
        "Stage 3: Le week-end dernier, je suis allé à la plage..."
      ],
      hard: [
        "Stage 1: Les sciences sont essentielles...",
        "Stage 2: Le changement climatique...",
        "Stage 3: L'intelligence artificielle..."
      ]
    }
  };

  const languageStages = stages[currentLanguage];
  const levelStages = languageStages ? languageStages[level] : null;

  // If no valid level is found
  if (!levelStages) {
    return <div>Invalid level or language selected.</div>;
  }

  return (
    <div className="level-details-page">
      <h1 className="level-heading">
        {level.charAt(0).toUpperCase() + level.slice(1)} Level ({currentLanguage})
      </h1>
      <div className="level-stages">
        {levelStages.map((stage, index) => (
          <div key={index} className="stage">
            <h3>Stage {index + 1}</h3>
            <p>{stage}</p>

            {/* Recording buttons and speaker for each stage */}
            <div className="recording-container">
              {!recordingState[index] ? (
                <button
                  className="start-recording"
                  onClick={() => startRecording(index)}
                >
                  Start Recording
                </button>
              ) : (
                <button
                  className="stop-recording"
                  onClick={() => stopRecording(index)}
                >
                  Stop Recording
                </button>
              )}
              <span
                className="speaker-icon"
                role="button"
                onClick={() => pronounceStageData(stage)}
                title="Play Stage Audio"
                style={{ cursor: "pointer", marginLeft: "10px", fontSize: "20px" }}
              >
                🔊
              </span>
            </div>

            {/* Show transcript for the specific stage */}
            {transcripts[index] && <p className="transcript">Transcript: {transcripts[index]}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelDetailsPage;
