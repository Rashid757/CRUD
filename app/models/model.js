const { DataTypes } = require("sequelize");
const db = require("../config/db");
const sequelize = db.sequelize;

const Tutorial = sequelize.define("tutorial", {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  published: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Tutorial;
