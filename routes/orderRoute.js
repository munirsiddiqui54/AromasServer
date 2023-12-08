
import express from 'express'
import { isAdmin, requiresLogin } from '../middlewares/authMiddleware.js';
import { deleteOrderController, getOrder, placeOrder } from '../controllers/orderController.js';

//router object
const router = express.Router()

router.get('/get-orders/:uid', requiresLogin, getOrder);
router.post('/place-order/:uid', requiresLogin, placeOrder);
router.delete('/delete/:oid', requiresLogin, deleteOrderController);


export default router;

