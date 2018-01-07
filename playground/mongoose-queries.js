const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {ObjectId} = require('mongodb'); 

Todo.find().then((doc)=>{
   console.log("Todos : ", doc);
});


var id='5a4fd4e3fd975e1574fe70a4';

if(!ObjectId.isValid(id)){
  console.log("Id is Invalid");
}

Todo.findOne({
	_id:id
}).then((doc)=>{
   console.log("Todo : ", doc);
});

Todo.findById(id)
    .then((doc)=>{
       console.log("Todo by Id: ", doc);
    });