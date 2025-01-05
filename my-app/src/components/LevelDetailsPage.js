import React from "react";
import { useParams } from "react-router-dom";
import "../App.css"; // Link your CSS file

const LevelDetailsPage = () => {
  const { level, language } = useParams(); // Get the level and language from the URL parameter

  // If language is undefined, set it to 'spanish' by default
  const currentLanguage = language ? language.toLowerCase() : 'spanish'; 

  // Sample data for the stages (You can replace these with dynamic content)
  const stages = {
    spanish: {
      easy: [
        "Stage 1: Hola, ¿cómo estás? (Translation: 'Hello, how are you?')",
        "Stage 2: Me llamo Juan. (Translation: 'My name is Juan.')",
        "Stage 3: Tengo 20 años. (Translation: 'I am 20 years old.')"
      ],
      medium: [
        "Stage 1: Me gusta mucho la música. Escucho música todos los días. (Translation: 'I really like music. I listen to music every day.')",
        "Stage 2: Mi ciudad es muy bonita. Tiene muchos parques, restaurantes y museos. (Translation: 'My city is very beautiful. It has many parks, restaurants, and museums.')",
        "Stage 3: El fin de semana pasado fui a la playa con mis amigos. El clima estaba perfecto, no hacía ni demasiado calor ni demasiado frío. (Translation: 'Last weekend I went to the beach with my friends. The weather was perfect, not too hot or too cold.')"
      ],
      hard: [
        "Stage 1: Las ciencias son fundamentales para comprender el mundo que nos rodea. (Translation: 'Science is fundamental for understanding the world around us.')",
        "Stage 2: El cambio climático es uno de los mayores desafíos de nuestro tiempo. (Translation: 'Climate change is one of the greatest challenges of our time.')",
        "Stage 3: La inteligencia artificial está revolucionando casi todos los sectores de la sociedad moderna. (Translation: 'Artificial intelligence is revolutionizing almost every sector of modern society.')"
      ]
    },
    french: {
      easy: [
        "Stage 1: Bonjour, comment ça va? (Translation: 'Hello, how are you?')",
        "Stage 2: Je m'appelle Jean. (Translation: 'My name is Jean.')",
        "Stage 3: J'ai 20 ans. (Translation: 'I am 20 years old.')"
      ],
      medium: [
        "Stage 1: J'aime beaucoup la musique. J'écoute de la musique tous les jours. (Translation: 'I really like music. I listen to music every day.')",
        "Stage 2: Ma ville est très belle. Il y a beaucoup de parcs, de restaurants et de musées. (Translation: 'My city is very beautiful. It has many parks, restaurants, and museums.')",
        "Stage 3: Le week-end dernier, je suis allé à la plage avec mes amis. Le temps était parfait, il ne faisait ni trop chaud ni trop froid. (Translation: 'Last weekend I went to the beach with my friends. The weather was perfect, not too hot or too cold.')"
      ],
      hard: [
        "Stage 1: Les sciences sont essentielles pour comprendre le monde qui nous entoure. (Translation: 'Science is essential for understanding the world around us.')",
        "Stage 2: Le changement climatique est l'un des plus grands défis de notre époque. (Translation: 'Climate change is one of the greatest challenges of our time.')",
        "Stage 3: L'intelligence artificielle révolutionne presque tous les secteurs de la société moderne. (Translation: 'Artificial intelligence is revolutionizing almost every sector of modern society.')"
      ]
    }
  };

  // Check if the level exists in the stages data for the selected language
  const languageStages = stages[currentLanguage];
  const levelStages = languageStages ? languageStages[level] : null;

  // If no stages found for the selected level or language, show an error message
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
            <button className="start-button">Start</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelDetailsPage;
