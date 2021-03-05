const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.listen(3000, function () {
  console.log("server is running");
})

//connecting to the  mongo local db
const url = 'mongodb://localhost:27017/WikiDB';
const mongodbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(url, mongodbOptions);

//creating schema
const articleSchema = {
  title: String,
  content: String
};

//creating model
const Article = mongoose.model("Article", articleSchema);

//get a articles
app.get("/articles", function (req, res) {
  Article.find(function (err, foundArticles) {
    if (!err) {
      res.send(foundArticles)
    } else {
      res.send(err)
    }
  });
});

//post a articles
app.post("/postArticle", function (req, res) {
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });
  newArticle.save(function (err) {
    if (!err) {
      res.send("success created a article")
    } else {
      res.send(err)
    }
  });
});

//delete a article
app.delete("/deleteArticle", function (req, res) {
  Article.deleteMany(function (err) {
    if (!err) {
      res.send("success deleted all article")
    } else {
      res.send(err)
    }
  });
});


//get a specfic article
app.route("/specficArticle/:articleTitle")
  .get(function (req, res) {
    Article.findOne({
      title: req.params.articleTitle
    }, function (err, foundArticle) {
      if (!err) {
        res.send(foundArticle)
      } else {
        res.send(err)
      }
    });
  })
  .put(function (req, res) {
    Article.update({
        title: req.params.articleTitle
      }, {
        title: req.body.title,
        content: req.body.content
      }, {
        overwrite: true
      },
      function (err) {
        if (!err) {
          res.send("done put function")
        } else {
          res.send(err)
        }
      });
  })
  .patch(function (req, res) {
    Article.updateOne({
        title: req.params.articleTitle
      }, {
        $set: req.body
      },
      function (err) {
        if (!err) {
          res.send("done put function")
        } else {
          res.send(err)
        }
      })


  })
  .delete(function (req, res) {
    Article.deleteOne({
        title: req.params.articleTitle
      },
      function (err) {
        if (!err) {
          res.send("done delete function")
        } else {
          res.send(err)
        }
      });
  });