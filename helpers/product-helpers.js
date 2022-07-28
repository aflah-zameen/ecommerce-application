var rd=require("../config/connection")

module.exports={
    addProduct:(product,callback)=>
    { 
        
        rd.client().hSet("products", ['name', product.name, 'price', product.price,'condition',product.condition]).then(callback(product.name))
        
    }
    ,
    getProducts:(callback)=>{
     return new Promise(async (resolve,reject)=>{
        let product=await rd.client().hGetAll('products')
        resolve(product)
        
     })
    }
}