import product from "../models/product.js"

const getAllProducts = async(req,res) => {
    const myData = await product.find({name:"iphone"})
    res.status(200).json({
        myData
    })
}
const getAllProductsTesting = async(req,res) => {

    res.status(200).json({
        status:true,
        message:"I am getAllProducts Testing"
    })
}

export { getAllProducts, getAllProductsTesting }