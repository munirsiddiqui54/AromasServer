
import express from 'express'
import { isAdmin, requiresLogin } from '../middlewares/authMiddleware.js';
import { placeOrder } from '../controllers/orderController.js';

//router object
const router = express.Router()

// router.get('/get-items/:uid', requiresLogin, itemController);
router.post('/place-order/:uid', requiresLogin, placeOrder);
// router.delete('/delete-item-cart/:cid', requiresLogin, deleteItemController);


export default router;

