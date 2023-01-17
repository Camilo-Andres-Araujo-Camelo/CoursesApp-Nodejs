const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const CategoryVideo = db.define("category_videos", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  videoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'video_id'
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id'
  }
});

module.exports = CategoryVideo;