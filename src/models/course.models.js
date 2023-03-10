const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Course = db.define("course", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  instructor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id'
  }
});

module.exports = Course;