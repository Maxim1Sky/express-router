// const { Fruit, User } = require("./models/index");
const Fruit = require("./models/Fruit");
const User = require("./models/User");
const { seedFruits, seedUsers } = require("./seedData");
const db = require("./db/connection");

const syncSeed = async () => {
  await db.sync({ force: true });
  await Fruit.bulkCreate(seedFruits);
  await User.bulkCreate(seedUsers);
};

syncSeed();

module.exports = syncSeed;
