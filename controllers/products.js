import product from "../models/product.js"

const getAllProducts = async(req,res) => {
    const { company, name, featured } = req.query;
    const queryObj = {};
    if(company) {
        queryObj.company = company;
    }
    if(name) {
        queryObj.name = { $regex: name,$options:"i"};
    }
    if(featured){
        queryObj.featured = featured;
    }
    console.log(queryObj);
    const myData = await product.find(queryObj)
    res.status(200).json({
        myData
    })
}
const getAllProductsTesting = async(req,res) => {
    const myData = await product.find(req.query)
    res.status(200).json({
        status:true,
        myData,
    })
}

export { getAllProducts, getAllProductsTesting }