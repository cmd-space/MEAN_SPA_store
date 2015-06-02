var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    product: String,
    quantity: Number,
    url: String,
    description: String
});

mongoose.model('Product', ProductSchema);