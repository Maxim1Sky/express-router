const express = require("express");
const router = express.Router();
const { User } = require("../models/index");

router.get("/", async (req, res) => {
  const theRes = await User.findAll();
});

module.exports = router;
