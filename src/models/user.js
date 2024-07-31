'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.user_progress, {
        foreignKey: "user_id",
        as: "userProgress",
      });
      user.belongsToMany(models.material, {
        through: models.user_progress,
        foreignKey: "user_id",
        as: "materials",
      });
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    shipping_address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};