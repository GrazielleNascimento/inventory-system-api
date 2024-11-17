import express from 'express';
import {
  createProfessional,
  getProfessionals,
  getProfessionalById,
  updateProfessional,
  deleteProfessional,
} from '../controllers/professionalController.js';

const router = express.Router();

router.post('/professional', createProfessional);
router.get('/professional', getProfessionals);
router.get('/professional/:id', getProfessionalById);
router.put('/professional/:id', updateProfessional);
router.delete('/professional/:id', deleteProfessional);

export default router;
