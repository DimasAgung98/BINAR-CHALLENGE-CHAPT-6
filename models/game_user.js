'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game_user.hasOne(models.game_user_biodata, {
        foreignKey: "userId",
        onDelete: "SET NULL",
      });
      game_user.hasMany(models.game_user_history, {
        foreignKey: "userId",
        onDelete: "SET NULL",
      });
    }
  }
  game_user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'game_user',
  });
  return game_user;
};