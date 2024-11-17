import express from 'express';
import {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
} from '../controllers/serviceController.js';

const router = express.Router();

router.post('/service', createService);
router.get('/service', getServices);
router.get('/service/:id', getServiceById);
router.put('/service/:id', updateService);
router.delete('/service/:id', deleteService);

export default router;
