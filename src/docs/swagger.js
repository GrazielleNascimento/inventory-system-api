import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { fileURLToPath } from 'url';
import path from 'path';

// Obter o diretório atual no contexto ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregar a documentação YAML do Swagger
const productDocument = YAML.load(path.join(__dirname, './yaml/products.yaml'));
/* const categoryDocument = YAML.load(path.join(__dirname, './yaml/categories.yaml'));
const supplierDocument = YAML.load(path.join(__dirname, './yaml/suppliers.yaml'));
const customerDocument = YAML.load(path.join(__dirname, './yaml/customers.yaml'));
const serviceDocument = YAML.load(path.join(__dirname, './yaml/services.yaml'));
const appointmentDocument = YAML.load(path.join(__dirname, './yaml/appointments.yaml'));
const stockDocument = YAML.load(path.join(__dirname, './yaml/stocks.yaml'));
const professionalDocument = YAML.load(path.join(__dirname, './yaml/professionals.yaml'));
 */
// Combinar os documentos YAML em um só
const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Inventory System API',
    version: '1.0.0',
    description: 'API documentation for the Inventory System',
  },
  paths: {
    ...productDocument.paths,
    /*     ...categoryDocument.paths,
    ...supplierDocument.paths,
    ...customerDocument.paths,
    ...serviceDocument.paths,
    ...appointmentDocument.paths,
    ...stockDocument.paths,
    ...professionalDocument.paths, */
  },
  components: {
    schemas: {
      ...productDocument.components?.schemas,
      /*  ...categoryDocument.components?.schemas,
      ...supplierDocument.components?.schemas,
      ...customerDocument.components?.schemas,
      ...serviceDocument.components?.schemas,
      ...appointmentDocument.components?.schemas,
      ...stockDocument.components?.schemas,
      ...professionalDocument.components?.schemas, */
    },
  },
};

// Função para configurar o Swagger no app Express
export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
