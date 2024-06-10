const mongoose = require("mongoose")

const authorSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        unique: true 
    },
    name : {
        type: String,
        required : true
    },
    bio : {
        type : String , 
        required : true
    }
})

const Author = mongoose.model("Author" , authorSchema);

module.exports  = Author;