import express from 'express'
import { registerController, loginController } from '../controllers/authController.js'

//router object
const router = express.Router()

//register || METHOD POST
router.post('/register', registerController);

//login || POST
router.post('/login', loginController);

export default router;

