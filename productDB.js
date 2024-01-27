import { connectDB } from "./db/connect.js";
import product from "./models/product.js";
import dotenv from 'dotenv';
import ProductJson from './products.json'assert { type: 'json' }

dotenv.config();

const start = async() => {
    try{
        await connectDB(process.env.MONGODB_URI);
        await product.create(ProductJson);
        console.log("Success!!")
    }catch(error) {
        console.log(error)
    }
}
start();
