const { check, validationResult } = require("express-validator");

const theUsersCheck = [check(["name", "age"]).not().isEmpty().trim()];
const theFruitsCheck = [check(["name", "color"]).not().isEmpty().trim()];

const fruitsPutCheck = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name is required")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Name must be between 4 and 20 characters"),

  check("color")
    .not()
    .isEmpty()
    .withMessage("Color is required")
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage("Color must be between 3 and 20 characters"),
];

const usersPutCheck = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name is required")
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be between 3 and 20 characters"),

  check("age")
    .not()
    .isEmpty()
    .withMessage("Age is required")
    .trim()
    .isNumeric()
    .withMessage("Age must be a number")
    .isInt({ min: 0, max: 150 })
    .withMessage("Age must be between 0 and 150"),
];

module.exports = {
  theUsersCheck,
  theFruitsCheck,
  usersPutCheck,
  fruitsPutCheck,
};
