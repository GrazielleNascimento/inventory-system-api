import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const Customer = sequelize.define('Customer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Customer.associate = (models) => {
  Customer.hasMany(models.Appointment, { foreignKey: 'customerId' });
};

export default Customer;
