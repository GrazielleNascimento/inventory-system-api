import { DataTypes } from "sequelize";

export default (sequelize) => {
const Product = sequelize.define('Product', {
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
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

    Product.associate = models => {
        Product.belongsTo(models.Category, {foreignKey: 'categoryId'}  );
        Product.hasMany(models.Stock, {foreignKey: 'productId'});
    };
    return Product;
};
