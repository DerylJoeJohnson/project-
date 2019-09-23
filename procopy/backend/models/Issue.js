var mongoose =require('mongoose');

const Schema = mongoose.Schema;

let Issue = new Schema({
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    description: {
        type: String
    },
    age: {
        type: Number
    },
    salary: {
        type: Number
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'none'
    }
});


module.exports=mongoose.model('Issue',Issue,); 