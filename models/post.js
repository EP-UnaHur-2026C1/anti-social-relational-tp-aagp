'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
        Post.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'user'
        });
        Post.hasMany(models.Comment, {
          foreignKey: 'postId',
          as: 'comments'
        });
        Post.hasMany(models.PostImage, {
          foreignKey: 'postId',
          as: 'images'
        }); 
        Post.belongsToMany(models.Tag, {
          through: "PostTag",
          foreignKey: 'postId',
          otherKey: 'tagId',
          as: 'tags'
        });
    }
  }
  Post.init({
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, 
  {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};