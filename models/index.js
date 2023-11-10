const Fruit = require("./Fruit");
const User = require("./User");
const syncSeed = require("../seed");

async function main() {
  //await syncSeed();
  // ^ no need for this if it runs in seed.js
}

main();

module.exports = {
  Fruit,
  User,
};
