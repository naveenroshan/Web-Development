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

//updating the data
Fruit.updateOne({
    _id: "5fcb1cdee451e309700f3db1"
}, {
    name: "peach"
}, function (err) {
    if (err) {
        console.log(err);
    } else {
        //close the db
        mongoose.connection.close();
        console.log("success");
    }
})