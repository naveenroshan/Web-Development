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

//creating a new fruit data
const apple = new Fruit({
    name: "apple",
    rating: 5,
    review: "cool"
});

//creating a new fruit data
const orange = new Fruit({
    name: "orange",
    rating: 6,
    review: "great & cool"
});

//creating a new fruit data
const kiwi = new Fruit({
    name: "Kiwi",
    rating: 6,
    review: "great"
});


//save the data to db
//fruit.save();

//many items inserts to db
Fruit.insertMany([apple, orange, kiwi], function (err) {
    if (err) {
        console.log(err);
    } else {
        //close the db
        mongoose.connection.close();
        console.log("success")
    }
});