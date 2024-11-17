import express from 'express';
import {
  createSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
} from '../controllers/supplierController.js';

const router = express.Router();

router.post('/supplier', createSupplier);
router.get('/supplier', getSuppliers);
router.get('/supplier/:id', getSupplierById);
router.put('/supplier/:id', updateSupplier);
router.delete('/supplier/:id', deleteSupplier);

export default router;
