// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');
  
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c5ef851de74b6040c61ba4b')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c5711d62dac051c04a5c7c8')
  }, {
    $set: {
      name: 'Victor'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  
  // client.close();
});