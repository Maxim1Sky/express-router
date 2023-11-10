const express = require("express");
const router = express.Router();
const { User } = require("../models/index");
const { validationResult } = require("express-validator");
const { theUsersCheck, usersPutCheck } = require("./validations");

router.get("/", async (req, res) => {
  const theRes = await User.findAll();
  res.json(theRes);
});

router.get("/:id", async (req, res) => {
  const theId = req.params.id;
  const theUser = await User.findByPj(theId);

  res.json(theRes);
});

router.post("/", theUsersCheck, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json({ error: errors.array() });
  } else {
    const theData = req.body;
    await User.create(theData);
    const allOfThem = await User.findAll();

    res.json(allOfThem);
  }
});

router.put("/:id", usersPutCheck, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json({ error: errors.array() });
  } else {
    const theData = req.body;
    const theId = req.params.id;
    await User.update(theData, { where: { id: theId } });
    const allOfThem = await User.findAll();

    res.json(allOfThem);
  }
});

router.delete("/:id", async (req, res) => {
  const theId = req.params.id;
  await User.destroy({ where: { id: theId } });
  const allOfThem = await User.findAll();

  res.json(allOfThem);
});

module.exports = router;
