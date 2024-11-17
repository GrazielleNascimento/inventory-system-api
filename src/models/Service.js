import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

export default (sequelize) => {
  const Service = sequelize.define('Service', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Service.associate = (models) => {
    Service.hasMany(models.Appointment, { foreignKey: 'serviceId' });
  };

  return Service;
};
