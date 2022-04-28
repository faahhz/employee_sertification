'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sertification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sertification.belongsToMany(models.employee, {through:models.employeeSertification})
    }
  }
  sertification.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
    expired: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(sertification, option){
        sertification.image = "https://via.placeholder.com/150"
      }
    },
    sequelize,
    modelName: 'sertification',
  });
  return sertification;
};