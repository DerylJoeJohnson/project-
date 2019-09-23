var mongoose =require('mongoose');

const Schema = mongoose.Schema;

let Rate = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: Number
    },
});


module.exports=mongoose.model('Rate',Rate,); 