'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game_user_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game_user_biodata.belongsTo(models.game_user, {
        foreignKey: "userId",
        onDelete: "SET NULL",
      });
    }
  }
  game_user_biodata.init({
    gender: DataTypes.STRING,
    age: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'game_user_biodata',
  });
  return game_user_biodata;
};