import DataTypes from 'sequelize';
import sequelize from '../database/config.js';

const Supplier = sequelize.define('Supplier', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    }

});

export default Supplier;
