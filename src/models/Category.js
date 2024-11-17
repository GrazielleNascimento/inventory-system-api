import { DataTypes } from 'sequelize';
import sequelize from "../database/config.js";


const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

});


Category.associate = (models) => {
    Category.hasMany(models.Product, {foreignKey: 'categoryId'});
};

export default Category;
