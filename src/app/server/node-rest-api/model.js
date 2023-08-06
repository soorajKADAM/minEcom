const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let products = new Schema({
  name:{
    type:String
  },
  price:{
    type:Number
  },
  quantity:{
    type:Number
  }
},{
  collection:'products'
})

let userDetails = new Schema({
  name:{
    type:String
  },
  mobile:{
    type:Number
  },
  address:{
    type:String
  }
},{
  collection:'userdetails'
})

let cart = new Schema({
  productName:{
    type:String
  },
  productPrice:{
    type:Number
  },
  productQuantity:{
    type:Number
  }
},{
  collection:'cart'
})

let wallet = new Schema({
  balance:{
    type:number
  }
},{
  collection:'wallet'
})

module.exports = mongoose.model('products', products)
module.exports = mongoose.model('userDetails', userDetails)
module.exports = mongoose.model('cart', cart)
module.exports = mongoose.model('wallet', wallet)
