import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Definindo a conexão com o banco de dados usando as variáveis de ambiente
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false,
  }
);

// Testando a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  })
  .catch((error) => {
    console.log('Erro ao conectar ao banco de dados', error);
  });

// Exportando o sequelize e os modelos
export default sequelize;
