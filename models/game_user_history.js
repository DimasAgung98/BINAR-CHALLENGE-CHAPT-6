'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game_user_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game_user_history.belongsTo(models.game_user, {
        foreignKey: "userId",
        onDelete: "SET NULL"
      })
    }
  }
  game_user_history.init({
    result: DataTypes.STRING,
    total_win: DataTypes.INTEGER,
    total_lose: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'game_user_history',
  });
  return game_user_history;
};