const express = require("express");
const router = express.Router();
const { Fruit } = require("../models/index");
const { validationResult } = require("express-validator");
const { theFruitsCheck, fruitsPutCheck } = require("./validations");

router
  .route("/")
  .get(async (req, res) => {
    const allOfThem = await Fruit.findAll();
    res.json(allOfThem);
  })
  .post(theFruitsCheck, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
      const theData = req.body;
      await Fruit.create(theData);
      const allOfThem = await Fruit.findAll();

      res.json(allOfThem);
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const theId = req.params.id;
    const theFruit = await Fruit.findByPk(theId);
    res.json(theFruit);
  })
  .put(fruitsPutCheck, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
      const theId = req.params.id;
      const theData = req.body;
      await Fruit.update(theData, { where: { id: theId } });
      const allOfThem = await Fruit.findAll();

      res.json(allOfThem);
    }
  })
  .delete(async (req, res) => {
    const theId = req.params.id;
    await Fruit.destroy({ where: { id: theId } });
    const allOfThem = await Fruit.findAll();

    res.json(allOfThem);
  });

module.exports = router;
