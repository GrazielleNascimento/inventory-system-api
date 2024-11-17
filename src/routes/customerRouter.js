import express from 'express';
import {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from '../controllers/customerController.js';

const router = express.Router();

router.post('/customer', createCustomer);
router.get('/customer', getCustomers);
router.get('/customer/:id', getCustomerById);
router.put('/customer/:id', updateCustomer);
router.delete('/customer/:id', deleteCustomer);

export default router;
