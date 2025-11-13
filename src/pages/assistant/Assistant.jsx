import React, { useState } from "react";
import "./Assistant.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Assistant() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "¡Hola! Soy tu asistente FitHub 🤖💪 ¿En qué puedo ayudarte hoy?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // No necesitamos HF_API_TOKEN ni MODEL

  // Nueva función para simular la respuesta de la IA
  const simulateAIResponse = (userText) => {
  const text = userText.toLowerCase();

  if (text.includes("hola") || text.includes("saludo")) {
    return "¡Hola! Me alegra verte. ¿Qué objetivo de fitness tienes para hoy? 💪";

  } else if (text.includes("ejercicio") || text.includes("rutina")) {
    return "Para una rutina de principiantes, te recomiendo 3 sets de 10 flexiones, 15 sentadillas y 1 minuto de plancha. ¡Empieza suave! 🏃‍♀️";

  } else if (text.includes("pierna") || text.includes("piernas")) {
    return "Para fortalecer tus piernas: sentadillas, zancadas y peso muerto son tus mejores aliados. 🔥";

  } else if (text.includes("abdomen") || text.includes("abs") || text.includes("barriga")) {
    return "El secreto para un abdomen marcado está en la dieta y ejercicios como planchas, crunches y elevaciones de piernas. 💥";

  } else if (text.includes("brazos") || text.includes("bíceps") || text.includes("tríceps")) {
    return "Prueba con flexiones cerradas, fondos y curls con mancuernas. ¡Sentirás el bombeo! 💪";

  } else if (text.includes("dieta") || text.includes("comer") || text.includes("alimentación")) {
    return "Una buena dieta fitness debe incluir proteínas, carbohidratos complejos y grasas saludables. ¡No olvides las verduras! 🥦";

  } else if (text.includes("descanso") || text.includes("dormir")) {
    return "Dormir bien es esencial. Tu cuerpo crece y se recupera mientras duermes. Intenta descansar al menos 7-8 horas. 😴";

  } else if (text.includes("motivación") || text.includes("desmotivado")) {
    return "Recuerda por qué empezaste. Cada pequeño avance cuenta. ¡Tú puedes con todo! 🔥";

  } else if (text.includes("peso") || text.includes("bajar") || text.includes("subir")) {
    return "Para bajar de peso: déficit calórico. Para subir: superávit calórico. En ambos casos, mantén una buena nutrición. ⚖️";

  } else if (text.includes("progreso") || text.includes("avance")) {
    return "Anota tus entrenamientos y mide tus resultados cada semana. Ver tu avance te motivará mucho. 📈";

  } else if (text.includes("lesión") || text.includes("dolor")) {
    return "Si sientes dolor fuerte o inflamación, detente y consulta a un profesional. ¡Escucha a tu cuerpo! 🚑";

  } else if (text.includes("suplemento") || text.includes("proteína") || text.includes("creatina")) {
    return "Los suplementos ayudan, pero no son mágicos. Prioriza la comida real y usa suplementos solo como apoyo. 🧃";

  } else if (text.includes("cardio") || text.includes("correr") || text.includes("caminar")) {
    return "El cardio mejora tu salud y quema grasa. Intenta 30 minutos diarios de caminata rápida o bicicleta. ❤️‍🔥";

  } else if (text.includes("gracias") || text.includes("ok")) {
    return "¡De nada! Estoy aquí para ayudarte a mantenerte Fit. 😎";

  } 
    else if (text.includes("admin") || text.includes("administrador") || text.includes("administradora")) {
    return "por el momento Thomas no puede ayudarte con temas administrativos. Por favor, contacta al equipo de soporte para asistencia. 📞";

  }
  else if (text.includes("entrenador") || text.includes("trainer") || text.includes("profesor")|| text.includes("profe")) {
    return "Actualmente Yoiner no esta programado para actuar como entrenador personal en vivo. Sin embargo, puede ofrecerte consejos y recomendaciones generales sobre fitness y bienestar. ¡Házmelo saber si necesitas ayuda con algo específico! 🏋️‍♂️";

  }   else if (text.includes("hora") || text.includes("horario") || text.includes("abrir")|| text.includes("profe")) {
    return "Nuestro gimnasio está abierto de lunes a viernes de 6:00 AM a 10:00 PM, y los fines de semana de 8:00 AM a 8:00 PM. ¡Te esperamos! ⏰";

  } 
  else if (text.includes("planes") || text.includes("comprar") || text.includes("descuento")|| text.includes("profe")) {
    return "Ofrecemos varios planes de membresía que se adaptan a tus necesidades. Plan Golden , Plan Platinum , Plan Diamond. Visita nuestra página de precios o contacta al equipo de ventas para más información. 💳";

  } 
  else {
    const genericResponses = [
      "Eso suena interesante. ¿Podrías contarme más sobre tu objetivo?",
      "No estoy seguro de entender. ¿Podrías explicarlo un poco más?",
      "Mi especialidad es fitness, nutrición y bienestar. ¿Quieres que te recomiende algo?",
    ];
    const randomIndex = Math.floor(Math.random() * genericResponses.length);
    return genericResponses[randomIndex];
  }
};

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // Simular el tiempo de respuesta (por ejemplo, 1 segundo)
    setTimeout(() => {
      try {
        const botText = simulateAIResponse(userMessage.text);
        
        // Actualizar mensajes y detener la carga
        setMessages(currentMessages => [...currentMessages, { sender: "bot", text: botText }]);
      } catch (error) {
        console.error(error);
        setMessages(currentMessages => [...currentMessages, { sender: "bot", text: "¡Oops! Algo salió mal en la simulación. 😵" }]);
      } finally {
        setLoading(false);
      }
    }, 1000); // 1000 milisegundos = 1 segundo de espera

  };

  return (
    <div className="assistant-page">
    <Header />
      <h2 className="assistant-title">Asistente FitHub 🤖</h2>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && <p className="loading">⌛ Generando respuesta...</p>}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Escribe tu pregunta..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} disabled={loading || !input.trim()}>
          Enviar
        </button>
      </div>
    <Footer />
    </div>
  );
}