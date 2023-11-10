const { check, validationResult } = require("express-validator");

const theUsersCheck = [check(["name", "age"]).not().isEmpty().trim()];
const theFruitsCheck = [check(["name", "color"]).not().isEmpty().trim()];

module.exports = { theUsersCheck, theFruitsCheck };
