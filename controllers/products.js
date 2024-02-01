import product from "../models/product.js"

const getAllProducts = async(req,res) => {
    const { company, name, featured, sort, select } = req.query;
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
    let apiData = product.find(queryObj);

    if(sort){
        let sortFix = sort.split(",").join(" ")
        apiData = apiData.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(",").join(" ")
        apiData = apiData.select(selectFix);
    }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObj);
    const products = await apiData;
    res.status(200).json({
        products,
        nbHits:products.length
    })
}
const getAllProductsTesting = async(req,res) => {
    console.log(req.query)
    const products = await product.find(req.query)
    res.status(200).json({
        status:true,
        products,
    })
}

export { getAllProducts, getAllProductsTesting }