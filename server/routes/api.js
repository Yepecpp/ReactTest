const express = require("express");
const router = express.Router();
const { UserR } = require("../routes/usersR");
const { MessagesR } = require("../routes/MessagesR");
router.use("/users", UserR);
router.use("/messages", MessagesR);
module.exports.apirouter = router;
