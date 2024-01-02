
import express from 'express'
import { isAdmin, requiresLogin } from '../middlewares/authMiddleware.js';
import { getMsg, getOrders, getSubs, getuser, getusers, sendmsg, subscribe } from '../controllers/msgController.js';
import { updateOrder } from '../controllers/orderController.js';

//router object
const router = express.Router()

// router.get('/get-orders/:uid', requiresLogin, getOrder);
router.post('/send', sendmsg);
router.post('/sub', subscribe);
router.get('/get-users', requiresLogin, isAdmin, getusers);
router.get('/get-user/:uid', requiresLogin, isAdmin, getuser);
router.get('/get-msgs', requiresLogin, isAdmin, getMsg);
router.get('/get-subs', requiresLogin, isAdmin, getSubs);
router.get('/get-orders', requiresLogin, isAdmin, getOrders);
router.get('/update-order/:oid/:key', requiresLogin, isAdmin, updateOrder);
// router.delete('/delete/:oid', requiresLogin, deleteOrderController);


export default router;

