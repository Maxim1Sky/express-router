const express = require("express");
const router = express.Router();
const { User } = require("../models/index");

router.get("/", async (req, res) => {
  const theRes = await User.findAll();
  res.json(theRes);
});

router.get("/:id", async (req, res) => {
  const theId = req.params.id;
  const theUser = await User.findByPj(theId);

  res.json(theRes);
});

router.post("/", async (req, res) => {
  const theData = req.body;
  await User.create(theData);
  const allOfThem = await User.findAll();

  res.json(allOfThem);
});

module.exports = router;
