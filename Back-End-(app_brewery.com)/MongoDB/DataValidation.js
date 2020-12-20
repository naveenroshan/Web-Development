//using mongodb with moongoose
const mongoose = require('mongoose');

//connecting to host
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log("Connected successfully to server");

//creating a schema with data validation
const fruitsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please check your data name is needed"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

//creating mongoose model
const Fruit = mongoose.model("Fruit", fruitsSchema);

//creating a new fruit data
const apple = new Fruit({
    name: "appledata1",
    rating: 50,
    review: "cool"
});


apple.save();

//close the db
mongoose.connection.close();