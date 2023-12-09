import express from 'express'
import { createProductController, searchProduct } from '../controllers/productController.js'
import { getPhotoController, deleteProduct, updateController } from '../controllers/productController.js';
import { getSingleProduct } from '../controllers/productController.js';
import { getProductsController } from '../controllers/productController.js';
import { isAdmin, requiresLogin } from '../middlewares/authMiddleware.js';
import ExpressFormidable from 'express-formidable';
//router object
const router = express.Router()

router.get('/get-products', getProductsController);

router.get('/product-photo/:pid', getPhotoController);

router.delete('/delete-product/:pid', requiresLogin, isAdmin, deleteProduct);

router.put('/update-product/:pid', requiresLogin, isAdmin, ExpressFormidable(), updateController);

router.get('/singleproduct/:pid', getSingleProduct);

router.get('/search/:key', searchProduct);

router.post('/addproduct', requiresLogin, isAdmin, ExpressFormidable(), createProductController);




export default router