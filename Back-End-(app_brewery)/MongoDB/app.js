const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';
const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url, mongodbOptions);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    //Insert a Document
    // insertDocuments(db, function() {
    //     client.close();
    //   });

    //Find All Documents
    // findDocuments(db, function () {
    //     client.close();
    // });
   
    //Find Documents with a Query Filter
    // findDocumentsFilter(db, function () {
    //         client.close();
    //     });

    //Update a document
    // updateDocument(db, function () {
    //     client.close();
    // });

    // //Remove a document
    // removeDocument(db, function () {
    //     client.close();
    // });

    //Index a Collection
    indexCollection(db, function() {
        client.close();
      });
});

//Insert a Document
const insertDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('furits');
    // Insert some documents
    collection.insertMany([{
        name: "apple"
    }, {
        name: "organe"
    }, {
        name: "pea"
    }], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

//Find All Documents
const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('furits');
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    });
}

//Find Documents with a Query Filter
const findDocumentsFilter = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('furits');
    // Find some documents
    collection.find({
        'name': "apple"
    }).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
}

//Update a document
const updateDocument = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('furits');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({
        name: "apple"
    }, {
        $set: {
            name: "banana"
        }
    }, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Updated the document with the field a equal to Banana");
        callback(result);
    });
}

//Remove a document
const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('furits');
    // Delete document where a is 3
    collection.deleteOne({ name : "pea" }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to pea");
      callback(result);
    });    
  }

  //Index a Collection
  const indexCollection = function(db, callback) {
    db.collection('car').createIndex(
      { "name": "BMW" },
        null,
        function(err, results) {
            console.log("created a new collection");
          callback(results);
      }
    );
  };