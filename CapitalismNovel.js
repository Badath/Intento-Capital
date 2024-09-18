import React, { useState } from 'react';

const CapitalismNovel = () => {
  const [screen, setScreen] = useState('intro');
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);

  const storyContent = {
    intro: {
      text: "Bienvenido a 'El Legado de los Mercaderes: Una Saga del Capitalismo'. Eres Marco, un joven aprendiz de mercader en la Florencia del siglo XV. Tu maestro Giovanni te guiará a través de la evolución del capitalismo.",
      options: [
        { label: 'Comenzar la aventura', next: 'florencia', points: 0 }
      ]
    },
    florencia: {
      text: "Te encuentras en las calles de Florencia. Giovanni te explica cómo la producción ya no se limita al consumo local. ¿Qué quieres hacer?",
      options: [
        { label: 'Invertir en producción para exportación', next: 'manufactura', points: 10 },
        { label: 'Mantener la producción local', next: 'local_production', points: 5 }
      ]
    },
    manufactura: {
      text: "Has llegado a la era de la manufactura. La división del trabajo ha aumentado la productividad. ¿Cómo procedes?",
      options: [
        { label: 'Especializar a los trabajadores', next: 'revolucion_industrial', points: 10 },
        { label: 'Mantener métodos artesanales', next: 'artesanal', points: 5 }
      ]
    },
    revolucion_industrial: {
      text: "Estás en plena Revolución Industrial. Las máquinas han aumentado la productividad, pero las condiciones de trabajo son duras. ¿Qué decides?",
      options: [
        { label: 'Priorizar la eficiencia', next: 'capitalismo_moderno', points: 10 },
        { label: 'Mejorar las condiciones laborales', next: 'sindicalismo', points: 15 }
      ]
    },
    capitalismo_moderno: {
      text: "Has llegado al capitalismo moderno. Grandes monopolios dominan la economía. ¿Cuál es tu estrategia?",
      options: [
        { label: 'Formar un conglomerado', next: 'crisis', points: 10 },
        { label: 'Apoyar a pequeñas empresas', next: 'economia_social', points: 15 }
      ]
    },
    crisis: {
      text: "Una crisis económica ha golpeado el mercado. El desempleo aumenta. ¿Cómo respondes?",
      options: [
        { label: 'Pedir intervención estatal', next: 'intervencion_estatal', points: 15 },
        { label: 'Confiar en el libre mercado', next: 'libre_mercado', points: 10 }
      ]
    },
    final: {
      text: `Tu viaje a través de la historia del capitalismo ha terminado. Has tomado decisiones importantes que han moldeado la economía. Puntuación final: ${points}`,
      options: [
        { label: 'Reiniciar la historia', next: 'intro', points: 0 }
      ]
    },
    local_production: {
      text: "Has decidido mantener la producción local. El crecimiento es lento pero estable. ¿Qué haces ahora?",
      options: [
        { label: 'Expandir gradualmente', next: 'manufactura', points: 10 },
        { label: 'Mantener el status quo', next: 'estancamiento', points: 5 }
      ]
    },
    artesanal: {
      text: "Mantienes los métodos artesanales. La calidad es alta, pero la producción es baja. ¿Cómo procedes?",
      options: [
        { label: 'Adoptar algunas técnicas de manufactura', next: 'revolucion_industrial', points: 10 },
        { label: 'Seguir con la producción artesanal', next: 'nicho_mercado', points: 15 }
      ]
    },
    sindicalismo: {
      text: "Has mejorado las condiciones laborales. Los trabajadores están más satisfechos, pero los costos han aumentado. ¿Qué haces?",
      options: [
        { label: 'Buscar un equilibrio', next: 'capitalismo_moderno', points: 15 },
        { label: 'Priorizar el bienestar laboral', next: 'cooperativas', points: 20 }
      ]
    },
    economia_social: {
      text: "Apoyas a las pequeñas empresas. La economía es más diversa, pero menos eficiente. ¿Cuál es tu próximo paso?",
      options: [
        { label: 'Fomentar la innovación', next: 'crisis', points: 15 },
        { label: 'Crear redes de cooperación', next: 'economia_solidaria', points: 20 }
      ]
    },
    intervencion_estatal: {
      text: "El estado interviene para mitigar la crisis. La recuperación es lenta pero estable. ¿Qué propones ahora?",
      options: [
        { label: 'Reducir gradualmente la intervención', next: 'final', points: 15 },
        { label: 'Mantener políticas intervencionistas', next: 'estado_bienestar', points: 20 }
      ]
    },
    libre_mercado: {
      text: "Confías en el libre mercado. Algunas empresas quiebran, pero otras crecen rápidamente. ¿Cuál es tu visión a futuro?",
      options: [
        { label: 'Promover más desregulación', next: 'final', points: 15 },
        { label: 'Buscar un equilibrio regulatorio', next: 'economia_mixta', points: 20 }
      ]
    },
    estancamiento: {
      text: "La economía se ha estancado. Otras regiones están creciendo más rápido. Has perdido una vida.",
      options: [
        { label: 'Reconsiderar la estrategia', next: 'florencia', points: 0 }
      ]
    },
    nicho_mercado: {
      text: "Te has establecido en un nicho de mercado de productos de alta calidad. El crecimiento es limitado pero estable.",
      options: [
        { label: 'Continuar en el nicho', next: 'final', points: 15 },
        { label: 'Buscar expandirse', next: 'revolucion_industrial', points: 10 }
      ]
    },
    cooperativas: {
      text: "Has fomentado un modelo cooperativo. La satisfacción laboral es alta, pero enfrentas desafíos en el mercado global.",
      options: [
        { label: 'Mantener el modelo cooperativo', next: 'final', points: 20 },
        { label: 'Adoptar prácticas más tradicionales', next: 'capitalismo_moderno', points: 15 }
      ]
    },
    economia_solidaria: {
      text: "Has creado una red de economía solidaria. La resiliencia económica ha aumentado, pero el crecimiento es más lento.",
      options: [
        { label: 'Expandir el modelo', next: 'final', points: 20 },
        { label: 'Buscar un equilibrio con el mercado tradicional', next: 'crisis', points: 15 }
      ]
    },
    estado_bienestar: {
      text: "Has establecido un fuerte estado de bienestar. La desigualdad se reduce, pero los impuestos son altos.",
      options: [
        { label: 'Mantener el modelo de bienestar', next: 'final', points: 20 },
        { label: 'Buscar reducir el gasto público', next: 'final', points: 15 }
      ]
    },
    economia_mixta: {
      text: "Has creado una economía mixta con elementos de libre mercado y regulación. El crecimiento es moderado pero estable.",
      options: [
        { label: 'Continuar con el modelo mixto', next: 'final', points: 20 },
        { label: 'Inclinar la balanza hacia el libre mercado', next: 'final', points: 15 }
      ]
    }
  };

  const handleSelect = (option) => {
    if (option.next === 'estancamiento') {
      setLives(lives - 1);
    }
    setPoints(points + option.points);
    if (lives > 0) {
      setScreen(option.next);
    } else {
      setScreen('game_over');
    }
  };

  const resetGame = () => {
    setScreen('intro');
    setLives(3);
    setPoints(0);
  };

  const currentScreen = storyContent[screen];

  if (screen === 'game_over') {
    return (
      <div>
        <h2>Game Over</h2>
        <p>Has agotado todas tus vidas. Puntuación final: {points}</p>
        <button onClick={resetGame}>Reiniciar juego</button>
      </div>
    );
  }

  return (
    <div>
      <h2>El Legado de los Mercaderes: Una Saga del Capitalismo</h2>
      <p>Vidas restantes: {lives}</p>
      <p>Puntos: {points}</p>
      <p>{currentScreen.text}</p>
      <div>
        {currentScreen.options.map((option, index) => (
          <button key={index} onClick={() => handleSelect(option)}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CapitalismNovel;