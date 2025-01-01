import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

const VoicePractice = () => {
  const [text, setText] = useState('');
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => setText(result),
  });

  return (
    <div>
      <h2>Practice Speaking</h2>
      <p>{text}</p>
      <button onMouseDown={listen} onMouseUp={stop}>Hold to Speak</button>
    </div>
  );
};

export default VoicePractice;
