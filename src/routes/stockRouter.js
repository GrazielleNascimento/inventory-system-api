import express from 'express';
import {
  createStock,
  getStocks,
  getStockById,
  updateStock,
  deleteStock,
} from '../controllers/stockController.js';

const router = express.Router();

router.post('/stock', createStock);
router.get('/stock', getStocks);
router.get('/stock/:id', getStockById);
router.put('/stock/:id', updateStock);
router.delete('/stock/:id', deleteStock);

export default router;
