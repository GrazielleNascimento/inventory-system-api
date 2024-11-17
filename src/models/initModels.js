import sequelize from '../database/config.js';
import defineProduct from '../models/Product.js';
import defineCategory from '../models/Category.js';
import defineSupplier from '../models/Supplier.js';
import defineCustomer from '../models/Customer.js';
import defineService from '../models/Service.js';
import defineAppointment from '../models/Appointment.js';
import defineStock from '../models/Stock.js';
import defineProfessional from '../models/Professional.js';

// Inicializa os modelos
const models = {
    Product: defineProduct(sequelize),
    Category: defineCategory(sequelize),
    Supplier: defineSupplier(sequelize),
    Customer: defineCustomer(sequelize),
    Service: defineService(sequelize),
    Appointment: defineAppointment(sequelize),
    Stock: defineStock(sequelize),
    Professional: defineProfessional(sequelize),
};

// Configura as associações
Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

export { models, sequelize };
