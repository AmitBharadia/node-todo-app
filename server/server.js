const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const _ = require('lodash');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');
var port=process.env.PORT;

var app = express();

app.use(bodyParser.json());

app.post('/todo', (req, res) => {
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed,
        completedAt: req.body.completedAt
    });

    todo.save().then((doc) => {
        res.send(doc)
    }, (err) => {
        res.send(e);
        console.log("Error while saving Todo item");
    });

});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    console.log("Fetching Todo with id : ", id);

    if (!ObjectId.isValid(id)) {
        res.status(404).send();
    }
    Todo.findById(id)
        .then((doc) => {
            res.send({ doc });
        }, (err) => {
            res.status(404).send();
        }).catch((e) => {
            console.log(e);
            res.status(404).send();
        });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    console.log("Deleting Todo with id : ", id);

    if (!ObjectId.isValid(id)) {
        res.status(404).send();
    }

    Todo.findOneAndRemove({
        _id: new ObjectId(id)
    }).then((results) => {
        console.log(results);
        res.send(results);
    });
    /* Todo.findByIdAndRemove(id).then((results)=>{
        console.log(results);
        res.send(results);
    });*/
});

app.patch('/todos/:id', (req, res) => {
    //Validate Id
    var id = req.params.id;
    console.log("Updating Todo with id : ", id);
    if (!ObjectId.isValid(id)) {
        res.status(404).send();
    }

    var body = _.pick(req.body, [
        'text',
        'completed'
    ]);
    console.log("Body is : ", body);
    //Update conditions
    if(!body.completed){
        body.completed=true;
        body.completedAt=new Date().getTime();;
    }else{
        body.completedAt=new Date().getTime();
    }

    console.log("Body is : ", body);
    //Update Query
    Todo.findByIdAndUpdate(id,{$set:body},{new:true})
      .then((doc)=>{
        console.log("Update Tod item : ",doc);
        res.send(doc);})
      .catch((e)=>{
        console.log("Error ocurred: ",e);
        res.status(400).send();
    });
   });   
app.listen(port, () => {
    console.log("Server started on port ", port);
});



/*
var Todos=mongoose.model('todos',{
    text:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },completed:{
        type:Boolean,
        default:false
    },completedAt:{
        type:Number,
        default:null
    }
});

var Users=mongoose.model('users',{
  email:{
    type:String,
    require:true,
    minlength:1,
    trim:true
  }
});*/

/*var newTodo=new Todos({
    text:'Amit',
    completed:false,
    completedAt:1
});

var newUser=new Users({
    email:'amitbharadia44@gmail.com'
});

newTodo.save()
       .then(
        (doc)=>{
         console.log(" Successfully saved Todo item", doc);     
        },(e)=>{
         console.log("Error while saving Todo item ",e);    
        });
newUser.save()
       .then(
        (doc)=>{
          console.log("Successfully saved a User record",doc);  
        },(err)=>{
          console.log("Failed while saving a User record",err);     
        });*/


