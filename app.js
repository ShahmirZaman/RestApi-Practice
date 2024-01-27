import express from 'express'
import dotenv from 'dotenv'
import { router } from './routes/productsRoutes.js';
import { connectDB } from './db/connect.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


app.get("/",(req,res) => {
    res.send("Hi, I am live!");
})

app.use("/api/products",router)

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT,() => {
            console.log(`${PORT} Yes I am connected!`)
        })
    } catch(error) {
        console.log(error)
    }
}
start()