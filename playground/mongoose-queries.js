const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5c685c53724a3b27240a30cc1';
const user_id = '5c6036c6870a7d11685f449d';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id)
//   .then((todo) => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// user find by id
User.findById(user_id)
  .then((user) => {
    if (!user) {
      return console.log('User not found');
    }
    console.log('User by id: ', user);
  }).catch((e) => console.log(e));