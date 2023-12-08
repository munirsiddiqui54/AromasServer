
import express from 'express'
import { isAdmin, requiresLogin } from '../middlewares/authMiddleware.js';
import { getMsg, getOrders, getSubs, getusers, sendmsg, subscribe } from '../controllers/msgController.js';

//router object
const router = express.Router()

// router.get('/get-orders/:uid', requiresLogin, getOrder);
router.post('/send', sendmsg);
router.post('/sub', subscribe);
router.get('/get-users', requiresLogin, isAdmin, getusers);
router.get('/get-msgs', requiresLogin, isAdmin, getMsg);
router.get('/get-subs', requiresLogin, isAdmin, getSubs);
router.get('/get-orders', requiresLogin, isAdmin, getOrders);
// router.delete('/delete/:oid', requiresLogin, deleteOrderController);


export default router;

