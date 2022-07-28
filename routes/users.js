var express = require('express');
var router = express.Router();
var productHelper=require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
   
  // productHelper.getProducts((product)=>{
  //   console.log(product.name);
  //   res.render("index",{product,admin:false})

  let product = [{
    name: "IPHONE 11 PRO",
    price: "89000",
    condition: "GOOD",
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-11-Pro_Matte-Glass-Back_091019_big.jpg.large.jpg"

  },
  {
    name: "IPHONE 12 PRO",
    price: "99000",
    condition: "VERY GOOD",
    img:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg"
  }
    , {
    name: "IPHONE 13 PRO",
    price: "109000",
    condition: "EXCELLENT",
    img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-2022-gallery-1-thumb?wid=406&hei=240&fmt=jpeg&qlt=90&.v=1645123518142"
  }
  ]
  res.render("index",{product,admin:false})
  
});

module.exports = router;
