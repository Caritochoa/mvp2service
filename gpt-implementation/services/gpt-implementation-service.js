const axios = require("axios");

const API_URL = "URL_DEL_API_DE_CHAT_GPT"; // Reemplaza con la URL real del API de Chat GPT

async function sendMessage(message) {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data;
  } catch (error) {
    // Manejo de errores
    console.error("Error en la solicitud al API de Chat GPT:", error);
    throw error;
  }
}

module.exports = {
  sendMessage,
};
