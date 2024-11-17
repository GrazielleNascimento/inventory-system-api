import { DataTypes } from "sequelize";
import sequelize from "../database/config.js";

const Stock = sequelize.define('Stock', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    entryQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    exitQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    movementType: {
        type: DataTypes.ENUM('ENTRY', 'EXIT'),
        allowNull: false
    },
    movementDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
    
});

Stock.associate = (models) => {
    Stock.belongsTo(models.Product, { foreignKey: 'productId' });
};


export default Stock;
