import express from 'express'
import { registerController, loginController } from '../controllers/authController.js'
import { isAdmin, requiresLogin } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router()

//register || METHOD POST
router.post('/register', registerController);

//login || POST
router.post('/login', loginController);

//test api
router.post('/test', requiresLogin, isAdmin, (req, resp) => {
    resp.send("Admin Accces Granted");
})

router.post('/admin-auth', requiresLogin, isAdmin, (req, resp) => {
    console.log("this is admin")
    resp.status(200).send({ ok: true });
})

export default router;

