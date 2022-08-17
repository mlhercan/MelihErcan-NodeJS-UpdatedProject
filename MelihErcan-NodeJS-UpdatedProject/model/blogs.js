const mongoose = require('mongoose')
const schema = mongoose.Schema 

const blogSchema = new schema({ 
    name:{                     
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true 
    }
}, {timestamps: true})        
const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog 