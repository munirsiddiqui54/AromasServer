import express from 'express'
import { addItem, itemController } from '../controllers/cartController.js'
import { isAdmin, requiresLogin } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router()

router.get('/get-items', requiresLogin, itemController);
router.post('/add-item-cart', requiresLogin, addItem)

// router.post('/admin-auth', requiresLogin, isAdmin, (req, resp) => {
//     console.log("this is admin")
//     resp.status(200).send({ ok: true });
// })

export default router;

