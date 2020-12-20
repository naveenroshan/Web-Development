//using mongodb with moongoose
const mongoose = require('mongoose');

//connecting to host
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log("Connected successfully to server");

//creating a schema 
const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

//creating mongoose model
const Fruit = mongoose.model("Fruit", fruitsSchema);

//deleting a record
Fruit.deleteOne({
    _id: "5fcb1f750ad4210cdcb7130d"
}, function (err) {
    if (err) {
        console.log(err);
    } else {
        //close the db
        mongoose.connection.close();
        console.log("success");
    }
});