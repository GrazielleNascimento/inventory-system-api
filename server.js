import express from 'express';
import bodyParser from 'body-parser';
//import cors from 'cors';
import sequelize from './src/database/config.js';
//import swaggerConfig from './src/
import professionalRoutes from './src/routes/professionalRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

/* app.use(cors({
    origin: 'http://localhost:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
})) */

//swaggerConfig(app);

// Rotas da API
app.use('/api', professionalRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  })
  .catch((error) => {
    console.log('Erro ao conectar ao banco de dados', error);
  });
