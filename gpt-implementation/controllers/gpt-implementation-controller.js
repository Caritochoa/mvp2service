const chatGptService = require("../services/chatGptService");

async function sendMessage(req, res) {
  const message = req.body.message;

  try {
    const response = await chatGptService.sendMessage(message);
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al enviar el mensaje al API de Chat GPT" });
  }
}

module.exports = {
  sendMessage,
};
