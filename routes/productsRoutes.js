import express from 'express';
import { getAllProducts, getAllProductsTesting } from '../controllers/products.js';
const router = express.Router();

// router.get("/",getAllProducts);
// router.get("/testing",getAllProductsTesting);

router.route("/").get(getAllProducts)
router.route("/testing").get(getAllProductsTesting)

// module.exports = router

export { router };