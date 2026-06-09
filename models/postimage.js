'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostImage extends Model {
    static associate(models) {
      PostImage.belongsTo(models.Post,{
        foreignKey: "postId",
        as: "post"
      })
    }
  }
  PostImage.init({
    url: DataTypes.STRING,
    postId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PostImage',
  });
  return PostImage;
};