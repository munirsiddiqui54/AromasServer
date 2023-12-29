import express from 'express'
import { addItem, itemController, deleteItemController } from '../controllers/cartController.js'
import { isAdmin, requiresLogin } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router()

router.get('/get-items/:uid', requiresLogin, itemController);
router.post('/add-item-cart', requiresLogin, addItem);
router.delete('/delete-item-cart/:cid', requiresLogin, deleteItemController);



export default router;

