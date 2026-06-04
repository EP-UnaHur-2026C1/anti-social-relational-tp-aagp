'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Post.belongsTo(models.User, {
          foreignKey: 'nickName' // o 'userId'
          // as: 'nickName'
        });
        Post.hasMany(models.Comment, {
          foreignKey: 'commentId',
          as: 'comentarios'
        });
        Post.hasMany(models.PostImage, {
          foreignKey: 'postImageId',
          as: 'imagenes'
        }); 
        /*
          Post.belongsToMany(models.Tag, {
            through: models.PostTags,
            foreignKey: 'postId',
            foreignKey: 'tagId',
            as: tags
          });
        */
      
    }
  }
  Post.init({
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    texto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};