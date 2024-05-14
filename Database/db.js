const mongoose  =require("mongoose");

const connection  = mongoose.connect("mongodb+srv://Anku:Brahman_45@cluster0.krbzesh.mongodb.net/feedback?retryWrites=true&w=majority");

module.exports={
    connection
}