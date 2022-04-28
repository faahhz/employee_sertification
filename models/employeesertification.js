'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employeeSertification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      employeeSertification.belongsTo(models.employee)
      employeeSertification.belongsTo(models.sertification)
    }
  }
  employeeSertification.init({
    employeeID: DataTypes.INTEGER,
    sertificationID: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employeeSertification',
  });
  return employeeSertification;
};