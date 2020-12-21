const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require('ejs');
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose');
//tell the app to use EJS
app.set("view engine", "ejs");

//setting the lister to work in server and local
app.listen(process.env.PORT || 3000, function() {
  console.log("server is running")
});

//making body parser avaliable to use in the code
app.use(bodyParser.urlencoded({
  extended: true
}));

//css file avalible in the local host and server
app.use(express.static("public"));

//db connection
mongoose.connect("mongodb://localhost:27017/todoListDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

//creating a schema
const ItemsSchema = new mongoose.Schema({
  name: String
});

//creating mongoose model
const Item = mongoose.model("Item", ItemsSchema);

//creating a new item data
const Item1 = new Item({
  name: "apple"
});

//getting the day
let day = date();

//creating an array to store the db items
const defaultItems = [Item1];

//custom parameter url list schema
const listSchema = {
  name: String,
  //creating a schema using the above
  items: [ItemsSchema]
};

//custom list model
const customList = mongoose.model("customList", listSchema);



//getting new item from the html input tag
app.get("/", function(req, res) {
  //finding element
  Item.find({}, function(err, foundItems) {
    //if the db has no values
    if (foundItems.length === 0) {
      // many items inserts to db
      Item.insertMany(defaultItems, function(err) {
        if (err) {
          console.log(err);
        } else {
          //close the db
          mongoose.connection.close();
          console.log("success saved the items")
        }
      });
      res.redirect("/");
    } else {
      //get the new value added to the collections

      res.render('List', {
        listTitle: "HomeList ",
        day: day,
        NewListItem: foundItems
      });
    }
  });
});

//method to post the data to the db when user add a list item and click the add button
app.post("/post", function(req, res) {
  //getting the list item from the request
  const itemName = req.body.newItem;
  //getting the list name
  const listName = req.body.list;
  //creating the a new item data
  const item = new Item({
    name: itemName
  });
  if (listName === "HomeList") {
    //saving the data to the Item collection
    item.save();
    res.redirect("/");
  } else {
    //getting data from the db
    customList.findOne({
      name: listName
    }, function(err, foundList) {
      foundList.items.push(item);
      foundList.save();
      //redirecting to the new url
      res.redirect("/" + listName);
    })
  }
});

//delete method
app.post("/delete", function(req, res) {
  //getting the item id to delete
  const checkedItemId = req.body.delectCheck
  Item.findByIdAndRemove(checkedItemId, function(err) {
    if (!err) {
      console.log("success of delection");
      res.redirect("/");
    } else {
      console.log(err);
    }
  });
});

//creating custom parameter url
app.get("/:customListName", function(req, res) {
  const customListName = req.params.customListName;
  customList.findOne({
    name: customListName
  }, function(err, foundList) {
    if (!err) {
      if (!foundList) {
        //create a new custom list
        //creating custom data using cutomList Model
        const customlist = new customList({
          name: customListName,
          items: defaultItems
        });
        customlist.save();
        console.log("does not exist")
        res.redirect("/" + customListName);
      } else {
        //show an existing list
        console.log("Exists..");
        res.render('List', {
          listTitle: foundList.name,
          day: day,
          NewListItem: foundList.items
        });
      }
    }
  });
});
