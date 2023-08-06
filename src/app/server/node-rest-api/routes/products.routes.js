const express = require('express');
const app = express();
const productRoute = express.Router();
let products = require("../model/products");
//CREATE
productRoute.route("/add-product").post(async(req,res,next)=>{
  await products.create(req.body).then((result)=>{
    res.json({
      data:result,
      message:"Data successfully added!",
      status:200
    });
  })
  .catch((err)=>{
    return next(err);
  });
});

//GET ALL
productRoute.route("/").get(async(req,res,next)=>{
  await products.find().then((result)=>{
    res.json({
      data:result,
      message:"All items succesfully fetched!",
      status:200
    });
  })
  .catch((err)=>{
    return next(err);
  });
});
//GET SINGLE
productRoute.route("/product-details/:id").get(async(req,res,next)=>{
  await products.findById(req.params.id).then((result)=>{
    res.json({
      data:result,
      message:"item succesfully fetched!",
      status:200
    });
  })
  .catch((err)=>{
    return next(err);
  });
});

//UPDATE

productRoute.route("/product-details/:id").put(async(req,res,next)=>{
  await products.findByIdandUpdate(req.params.id,{$set:req.body}).then((result)=>{
    res.json({
      data:result,
      message:"Data succesfully Updated!"
    });
  })
  .catch((err)=>{
    return next(err);
  });
});

productRoute.route("/delete-product/:id").delete(async(req,res,next)=>{
  await products.findByIdandRemove(req.params.id).then((result)=>{
    res.json({
      message:"Data succesfully deleted!"
    });
  })
  .catch((err)=>{
    return next(err);
  });
});

module.exports = productRoute;

