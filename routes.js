// routes.js
const express = require("express");
const router = express.Router();
const hello_controller = require("./hello_module/hello_controller");
const gpt_controller = require("./gpt_module/gpt-controller");

router.get("/hello", hello_controller.getIndex);
router.get("/gpt", gpt_controller.getAnswers);
module.exports = router;
