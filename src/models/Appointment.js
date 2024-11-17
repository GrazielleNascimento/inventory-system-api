import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

export default (sequelize) => {
const Appointment = sequelize.define('Appointment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dateTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  serviceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  professionalId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Appointment.associate = (models) => {
  Appointment.belongsTo(models.Customer, { foreignKey: 'customerid' });
  Appointment.belongsTo(models.Service, { foreignKey: 'serviceId' });
  Appointment.belongsTo(models.Professional, { foreignKey: 'professionalid' });
};

return Appointment;
}