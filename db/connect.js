import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = (uri) => {
    console.log("Connect DataBase!!")
    return mongoose.connect(uri);
}
export { connectDB };