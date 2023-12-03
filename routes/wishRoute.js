import express from 'express'
import { isAdmin, requiresLogin } from '../middlewares/authMiddleware.js';
import { addtowish, deleteWish, getwishlist } from '../controllers/wishController.js';

//router object
const router = express.Router()

router.get('/get-items/:uid', requiresLogin, getwishlist);
router.post('/add-item-wish', requiresLogin, addtowish);
router.delete('/delete-item-wish/:wid', requiresLogin, deleteWish);

export default router;

