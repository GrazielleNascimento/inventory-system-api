import { models } from '../models/initModels.js';


export const createProfessional = async (req, res) => {
    try {
        const { name, email, phone, address, category } = req.body;
        const newProfessional = await models.Professional.create
        ({ name, email, phone, address, profession, experience, rating, price, availability, description, image });
        res.status(201).json( {message: 'Professional created successfully', newProfessional });
    } catch (error) {
        res.status(400).json({ error: 'Failed to create professional', details: error.message});
    }
};

export const getProfessionals = async (req, res) => {
    try {
        const professionals = await models.Professional.findAll();
        res.status(200).json({message: "Retrieved professionals", professionals});
    } catch (error) {
        res.status(400).json({ error: 'Not possible getProfessionals', details: error.message });
    }
};

export const getProfessionalById = async (req, res) => {
    try {
        const professional = await models.Professional.findByPk(req.params.id);
        if (professional) {
            res.status(200).json(professional);
        } else {
            res.status(404).json({ error: 'Professional not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Not possible getProfessionalById', details: error.message });
    }
};

export const updateProfessional = async (req, res) => {
    //pega o id do profissional que esta como parametro na rota
    const {id } = req.params;
    //pega os dados do profissional que foram enviados no corpo da requisição
    const { name, email, phone, address, profession, experience, rating, price, availability, description, image } = req.body;

    try {
        
        const [updated] = await models.Professional.update( 
            { name, email, phone, address, profession, 
            experience, rating, price, availability, description, image }, 
            { where: { id: req.params.id }, returning: true
        });

        if (updated) {
            const updatedProfessional = await models.Professional.findByPk(req.params.id);
            res.status(200).json(updatedProfessional);
        } else {
            res.status(404).json({ error: 'Professional not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Failed to update Professional', details: error.message });
    }
};


export const deleteProfessional = async (req, res) => {
    try {
      // Busca o profissional antes de tentar deletar
      const professional = await models.Professional.findByPk(req.params.id);
  
      if (!professional) {
        // Retorna 404 se não encontrar o registro
        return res.status(404).json({ error: 'Professional not found' });
      }
  
      // Deleta o registro encontrado
      await professional.destroy();
  
      // Retorna 204 sem conteúdo no corpo da resposta
      return res.status(204).send();
    } catch (error) {
      // Retorna 400 para indicar um erro interno
      return res.status(400).json({
        error: 'Failed to delete Professional',
        details: error.message,
      });
    }
  };
  

